const fs = require("fs");

function addNotes(title, message) {
  let notes = loadNotes();

  notes.push({
    title,
    message,
  });

  saveNotes(JSON.stringify(notes));
}

function saveNotes(notes) {
  fs.writeFileSync("./notes.json", notes);
  console.log("Note taken");
}

function getNotes() {}

function removeNote(title) {}

function getNote(title) {}

function loadNotes() {
  try {
    const notesStream = fs.readFileSync("./notes.json", "utf-8");
    const notes = JSON.parse(notesStream);
    return notes;
  } catch (e) {
    return [];
  }
}

module.exports = {
  addNotes,
  getNote,
  getNotes,
  removeNote,
  loadNotes,
};
