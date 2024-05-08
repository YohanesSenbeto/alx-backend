const kue = require('kue');
const fs = require('fs');

// Initialize the Kue queue
const queue = kue.createQueue();

let jobId = 1;

// Read the current job ID from a file
try {
  jobId = parseInt(fs.readFileSync('job_id.txt', 'utf8'));
} catch (err) {
  console.error('Error reading job ID file:', err);
}

function createJob() {
  // Create a job
  queue.create('push_notification_code', {
    phoneNumber: '4153518780',
    message: `This is the code to verify your account ${jobId}`,
  })
 .on('failed', function(errorMessage) {
    console.error('Job failed:', errorMessage);
  })
 .on('progress', function(progress) {
    console.log('Job progress:', progress);
  })
 .save((err) => {
    if (err) {
      console.error('Error creating job:', err);
    } else {
      console.log(`Notification job created: ${jobId}`);
      jobId++; // increment job ID for next job
      fs.writeFileSync('job_id.txt', jobId.toString()); // save the new job ID to the file
    }
  });
}

createJob(); // create a new job
