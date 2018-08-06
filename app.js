console.log("Starting app.js");
//website: https://nodejs.org/api/

const fs = require('fs'); //require filesystem module
const _ = require('lodash'); //loads lodash module that we installed via npm
const yargs = require('yargs');
const notes = require('./notes');
const argv = yargs.argv;

//console.log(process.argv); //all command line arguments passed in.

var command = process.argv[2];
var command2 = argv._[0];


console.log(`Command: ${command}`)

// console.log('Process', process.argv);
// console.log('yargs:', argv);

if (command === 'add') {
    
    var note = notes.addNote(argv.title, argv.body)
    //console.log('console.loging note: ',note)
    if (note === undefined) {
        console.log('Creating note...');
        // console.log('--');
        console.log("Title '"+argv.title+"'", 'already use');
    } else {
        console.log("NOTE CREATED!")
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log(`Command: ${command} not found`);
}