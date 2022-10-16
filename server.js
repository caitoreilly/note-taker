// require dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const {v4: uuidv4} = require("uuid");

// tell app to use port and default to 3001 if not set 
const PORT = process.env.PORT || 3001;

// initialize app variable to run express.js
const app = express();

// set up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// html route created for landing page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// html route created for notes page that user interacts with to write, save, and delete notes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

// getNotes() function created to get the notes created and parse them
function getNotes() {
return readFile("db/db.json", "utf-8").then(rawNotes => {
    let parseNotes = [].concat(JSON.parse(rawNotes));
    return parseNotes;
})
}

// API route created to get the notes 
app.get("/api/notes", (req, res) => {
getNotes().then((parseNotes) => res.json(parseNotes));
})

// API route created to post the notes & save on the left side of the page
// When click on each note on the side, it then shows up again for user
app.post("/api/notes", (req, res) => {
    getNotes().then(oldNotes => {
    var noteObject = {title: req.body.title, text: req.body.text, id: uuidv4()};
    var newArray = [...oldNotes, noteObject];
    writeFile("db/db.json", JSON.stringify(newArray));
    }).then(()=> res.json({msg: "ok"}));
})

// API route created to delete the previously saved note when the user clicks the trash can icon next to the note 
app.delete("/api/notes/:id", (req, res) => {
    getNotes()
      .then((oldNotes) => {
        var updatedArray = oldNotes.filter((note) => note.id !== req.params.id);
        writeFile("db/db.json", JSON.stringify(updatedArray));
      })
      .then(() => res.json({ msg: "ok" }));
})


// set up listen method to make the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})