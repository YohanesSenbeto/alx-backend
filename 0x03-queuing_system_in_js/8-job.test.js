import { expect } from 'chai';
import createPushNotificationsJobs from './8-job';
import kue from 'kue';

describe('createPushNotificationsJobs', () => {
  let queue;

  beforeEach(() => {
    queue = kue.createQueue();
    queue.testMode.enter();
  });

  afterEach(() => {
    queue.testMode.exit();
    queue.removeAllListeners();
  });

  it('display a error message if jobs is not an array', () => {
    try {
      createPushNotificationsJobs({}, queue);
      throw new Error('Expected error to be thrown');
    } catch (err) {
      expect(err.message).to.equal('Jobs is not an array');
    }
  });

  it('create two new jobs to the queue', () => {
    const jobs = [
      { phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' },
      { phoneNumber: '4153518781', message: 'This is the code 5678 to verify your account' },
    ];

    createPushNotificationsJobs(jobs, queue);

    expect(queue.testMode.jobs.length).to.equal(2);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
  });
});
