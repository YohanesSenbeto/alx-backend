const express = require('express');
const app = express();
const Redis = require('ioredis');
const redis = new Redis();
const kue = require('kue');

const queue = kue.createQueue();

let availableSeats = 50;
let reservationEnabled = true;

async function reserveSeat(number) {
  await redis.set('available_seats', number);
}

async function getCurrentAvailableSeats() {
  return await redis.get('available_seats');
}

app.get('/available_seats', async (req, res) => {
  const seats = await getCurrentAvailableSeats();
  res.json({ numberOfAvailableSeats: seats });
});

app.get('/reserve_seat', async (req, res) => {
  if (!reservationEnabled) {
    res.json({ status: 'Reservation are blocked' });
    return;
  }
  const job = queue.create('reserve_seat', {}).save((err) => {
    if (err) {
      res.json({ status: 'Reservation failed' });
    } else {
      res.json({ status: 'Reservation in process' });
    }
  });
});

app.get('/process', async (req, res) => {
  res.json({ status: 'Queue processing' });
  queue.process('reserve_seat', async (job, done) => {
    const currentSeats = await getCurrentAvailableSeats();
    if (currentSeats <= 0) {
      reservationEnabled = false;
      done(new Error('Not enough seats available'));
    } else {
      await reserveSeat(currentSeats - 1);
      done();
    }
  });
});

queue.on('job complete', (id) => {
  console.log(`Seat reservation job ${id} completed`);
});

queue.on('job failed', (id, err) => {
  console.log(`Seat reservation job ${id} failed: ${err}`);
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
  reserveSeat(50); // Initialize available seats to 50
});
