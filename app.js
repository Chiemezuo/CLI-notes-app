const yargs = require("yargs");
const {
  addNotes,
  getNotes,
  removeNote,
  getNote,
  loadNotes,
} = require("./notes");

yargs.command(
  "add",
  "Add a note",
  {
    title: {
      alias: "t",
      demandOption: true,
      describe: "The title of the note",
    },
    message: {
      alias: "t",
      demandOption: true,
      describe: "The actual note",
    },
  },
  function (args) {
    addNotes();
  }
);

yargs.parse();
