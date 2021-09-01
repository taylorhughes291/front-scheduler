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
* Write GET request to accept new timeslot data
* Pass as props down through coaches component into new component timeslots
* Filter out all timeslots data in coaches, then re-organize timeslots by day of the week in timeslots.
* Render all available timeslots
* Style as necessary

## User Story # 3 - As a User, I want to book an appointment with a coach at one of their available times.
* Create the ability to make a PUT request through the app.
* Create a modal that will Accept the user's name and phone number and confirm the timeslot. Upon, submit, send the PUT request to the database with the "available" flag set to "false"
* Pop up with a confirmation message that everything worked.

### Basic Project Outline

* Modify React DB request to accept new timeslot data and house it in state
* Filter out timeslots for each coach and display only their availabilities on their tab
* Use bootstrap buttons to display all available time slots for each coach
* Modify design and layout as needed

## System Requirements - what platform/service am I deployed to
I recommend using either Vercel or Netlify. Either work. I ended up using both.

## Build/Run Instructions

### LOCAL DEV INSTRUCTIONS
* Ensure that once the repository is cloned on your computer and you are in the "scheduler-front" folder, you run the following terminal command so that you are up to date on all installed packages.
```
npm i
```
* If you are running this application on your local machine, please create a file called .env and create an environmental variable called REACT_APP_DATABASE with your desired backend URL attached. You can find a suitable backend at the github link https://github.com/taylorhughes291/scheduler

### DEPLOYMENT SERVICE
* If you are running this application on a deployed service such as Netlify or Vercel, please be sure to add REACT_APP_DATABASE as an environmental variable set to your desired backend URL, with no trailing forward-slash in the URL.

### Challenges/Issues encountered

* I was struggling with having a lot of incorrect timeslots, but with troubleshooting I figured out that I was bringing in data from the original database request instead of the filtered data sets I had created for each coach.