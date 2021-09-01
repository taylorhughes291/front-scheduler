# README

This README would normally document whatever steps are necessary to get the
application up and running.

## User Story #1 - As a User, I want to see which coaches I can schedule with.

### Basic Project Outline

* Initialize React App
* Write function to retrieve data from GET route
* Initialize a useEffect to retrieve coach data once
* Display all data
* Configure layout and design

## User Story #2 - As a User, I want to see what 30 minute timeslots are available to schedule with a particular coach.

### Basic Project Outline

* Modify React DB request to accept new timeslot data and house it in state
* Filter out timeslots for each coach and display only their availabilities on their tab
* Use bootstrap buttons to display all available time slots for each coach
* Modify design and layout as needed

## System Requirements - what platform/service am I deployed to

## Build/Run Instructions
* Ensure that once the repository is cloned on your computer and you are in the "scheduler-front" folder, you run the following terminal command so that you are up to date on all installed packages.
```
npm i
```
* If you are running this application on your local machine, please create a file called .env and create an environmental variable called REACT_APP_DATABASE with your desired backend URL attached. You can find a suitable backend at the github link https://github.com/taylorhughes291/scheduler

* If you are running this application on a deployed service such as Netlify or Vercel, please be sure to add REACT_APP_DATABASE as an environmental variable set to your desired backend.

### Challenges/Issues encountered