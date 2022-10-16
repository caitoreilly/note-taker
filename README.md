# note-taker

---

The goal of this project was to use Express.js to add the back end code and functionality of writing, saving, and deleting notes to the Note Taker web application. Click to access my Note Taker application deployed to Heroku [here](https://co-notetaker.herokuapp.com/).

## Description

---

Through the use of Node.js and Express.js, I built the back end code for this project, connected it to the front end code, and deployed the entire application to Heroku to offer users a fully functioning note-taking web application. First, the dependencies for the project needed to be required and defined, then a port was set up for the project, Express.js was initialized to run via the a variable called app, and the app variable was used to handle data parsing. Next, HTML routes were created for the landing webpage and the notes page. API routes were there created to get the notes, post the notes, and delete the notes on the webpage. The use of arrays was used to save this information submitted by the user. This provides users the ability to type a new note, save the note with the save icon that appears once a note is typed, and see all of the saved notes on the left side of the webpage. I was also able to build in the ability for users to access & click on saved notes to open them up again. Lastly, a delete route was created so users can delete each note by clicking on the trashcan icon. It was necessary to create a unique id for each note using the UUID npm package in order to open the note and/or delete the note. Notes were saved with their unique ids in a JSON file. It was important to run the server each time in the command line before going to https://localhost:3001 for full functionality. 

## Technologies

---

This project was created with:

- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js
- Express.js
- UUID

## Screenshot

---

This image displays the Note Taker web application after a user created a note.

![Note Taker App Image](./assets/note%20taker%20pic.png)
