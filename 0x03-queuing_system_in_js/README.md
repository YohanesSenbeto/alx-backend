# 0x03. Queuing System in JS

## Back-end
- JavaScript
- ES6
- Redis
- NodeJS
- ExpressJS
- Kue

## Project Timeline
- Start: May 6, 2024, 6:00 AM
- End: May 9, 2024, 6:00 AM
- Manual QA review must be done

## Resources
Read or watch:
- [Redis quick start](https://redis.io/topics/quickstart)
- [Redis client interface](https://redis.io/topics/clients)
- [Redis client for Node JS](https://www.npmjs.com/package/redis)
- [Kue deprecated but still used in the industry](https://www.npmjs.com/package/kue)

## Learning Objectives
Upon completion of this project, you should be able to explain the following without the need for external resources:
- How to run a Redis server on your machine
- How to perform basic operations with the Redis client
- How to use a Redis client with Node JS for basic operations
- How to store hash values in Redis
- How to handle asynchronous operations with Redis
- How to implement Kue as a queue system
- How to build a basic Express app interacting with a Redis server
- How to build a basic Express app interacting with a Redis server and queue

## Requirements
- All code will be compiled/interpreted on Ubuntu 18.04, Node 12.x, and Redis 5.0.7
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Required Files for the Project:
  - `package.json`
  - `.babelrc`
  - Additional files as specified in each task
- Run `$ npm install` after creating `package.json`

## Tasks
1. **Install a Redis instance**
   - Download, extract, and compile the latest stable Redis version
   - Start Redis server and perform basic operations
   - Copy `dump.rdb` from Redis directory to project root

2. **Node Redis Client**
   - Install `node_redis` using npm
   - Write a script to connect to the Redis server and log connection status

3. **Node Redis client and basic operations**
   - Write a script to perform basic Redis operations using callbacks

4. **Node Redis client and async operations**
   - Modify previous script to use promisify and async/await

5. **Node Redis client publisher and subscriber**
   - Create scripts for publisher and subscriber functionalities

6. **Create the Job creator**
   - Create a queue with Kue and add jobs to it

7. **Create the Job processor**
   - Create a queue with Kue to process jobs

8. **Track progress and errors with Kue: Create the Job creator**
   - Create jobs and track progress/errors using Kue

9. **Track progress and errors with Kue: Create the Job processor**
   - Process jobs and track progress/errors using Kue

10. **Writing the job creation function**
    - Create a function to generate and manage jobs

11. **Writing the test for job creation**
    - Write tests to validate job creation function

12. **In stock?**
    - Implement a web application to manage product stock using Redis

---
**Note:** Ensure all code adheres to the specified requirements and runs without errors.

