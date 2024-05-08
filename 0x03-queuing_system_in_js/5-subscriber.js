const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

client.subscribe('holberton school channel', (err, count) => {
  if (err) {
    console.log(`Error subscribing to channel: ${err.message}`);
  } else {
    console.log(`Subscribed to holberton school channel`);
  }
});

client.on('message', (channel, message) => {
  console.log(`Received message on ${channel}: ${message}`);
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});
