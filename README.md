# Can of Books (Backend)

**Author**: Kawika Miller & Reed Vogt

**Version**: 1.0.3 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This app will allow a user to keep a record of various books that they enjoy, or books that that want to read in the future, and allows the user to view/add/remove them as they please. 

## Getting Started
**If running this app locally:**
  - Requires both the backend and frontend project folders
  - Dependencies will need to be installed
    - express
    - cors
    - dotenv
    - mongoose
    - nodemon (optional) 
  - Both the backend and the frontend need to be started by running the command `npm start`.
    - If nodemon has been installed, start the server by running the command `npx nodemon server.js`
  - Add a `.env` file to project folder, should include:
    - PORT
      - suggest using 3001 (e.g. `PORT=3001`)
    - DATABASE_URL
      - If you are a Code Fellows instructor or TA you should have access to the database url
      - If you are not then get your own database url >:)
      
**If running this app from deployed site**
- Everything should work as is!

## Architecture
Node.js, Express.js, Mongoose, MongoDB, CORS, dotenv

## Change Log
- 2023-27-02 => 1:12-1:30PM : Initialize Project 

- 2023-27-02 => 1:30-3:15PM : Create book schema, seed data to database

- 2023-27-02 => 3:15-4:07PM : Successfully handle GET requests to '/books' route | ~~*only works locally?~~

- 2023-27-02 => 4:07-4:48PM : Deployed server will return database info now | *had to remove 'async' keyword in the .get() method's callback function

- 2023-28-02 => 1:12-1:30PM : Successfully handle POST requests to '/books' route

- 2023-28-02 => 1:33-2:05PM : Successfully handle DELETE requests to '/books' route

- 2023-28-02 => 1:00 - 1:30PM : Successfully handle PUT requests to '/books' route


## Estimates

### Lab 11
---

#### **Task 01: Set Up Repos**

Estimate of time needed to complete: 15m

Start time: 1:12PM

Finish time: 1:30PM

Actual time needed to complete: 12m

#### **Task 02: Storage**

Estimate of time needed to complete: 80m

Start time: 1:30PM

Finish time: 4:48PM

Actual time needed to complete: 198m

#### **Task 03: Book Component**

*this info is on the front end read me*

---
---

### Lab 12
---

#### **Task 01: Create**

Estimate of time needed to complete: 45m

Start time: 1:08PM

Finish time: 1:30PM

Actual time needed to complete: 22m

*this timeframe is strictly for the backend stuff

#### **Task 02: Delete**

Estimate of time needed to complete: 45m

Start time: 1:33PM

Finish time: 2:05PM

Actual time needed to complete: 32m

*this timeframe is strictly for the backend stuff

---
---

### Lab 13
---

#### **Task 01: Update**

Estimate of time needed to complete: 45m

Start time: 1:00PM

Finish time: 1:29PM

Actual time needed to complete: 29m

*this timeframe is strictly for the backend stuff

---
---

## Credit and Collaborations
Reed Vogt | https://github.com/reedoooo

---

### Logistical

- What hours will you be available to communicate?
  - We will both be available after class until a reasonable time
- What platform will you use to communicate (ie. Slack, phone ...)?
  - Slacks will be used to communicate
- How often will you take breaks?
  - We will play it by ear when it comes to breaks
- What is your plan if you start to fall behind?
  - If we start to fall behind will will talk with a TA or teacher for help

### Cooperative

- Make a list of each parson's strengths.
  - Reed: Front-end
  - Kawika: Back-end
- How can you best utilize these strengths in the development of your application?
  - We can prioritize time for each person relative to their strength
- In what areas do you each want to develop greater strength?
  - We both want to become better coders
- Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?
  - We will communicate thoroughly throughout the day and work in group sessions

### Conflict Resolution

- What will your team do if one person is pulling all the weight while the other person is not contributing?
  - Each person would be confronted
- What will your team do if one person is taking over the project and not letting the other member contribute?
  - Each person would be confronted
- How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?
  - We will play to eachother's strengths and weaknesses

---

## What can books do?

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Build out this code base to create an web app to track what books have impacted you, and what's recommended to read next.

