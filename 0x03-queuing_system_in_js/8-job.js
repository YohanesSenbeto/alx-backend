import kue from 'kue';

const createPushNotificationsJobs = (jobs, queue) => {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach((job) => {
    const jobInstance = queue.create('push_notification_code_3', job).save((err) => {
      if (err) {
        console.error(`Notification job 51 failed: ${err}`);
      } else {
        console.log(`Notification job created: 51`);
      }
    });

    queue.on(`job 51 complete`, () => {
      console.log(`Notification job 51 completed`);
    });

    queue.on(`job 51 failed`, (err) => {
      console.error(`Notification job 51 failed: ${err}`);
    });

    queue.on(`job 51 progress`, (progress) => {
      console.log(`Notification job 51 ${progress}% complete`);
    });
  });
};

export default createPushNotificationsJobs;
