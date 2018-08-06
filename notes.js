console.log("Starting notes.js");
//arrow function (get rid of 'function' and add arrow '=>' after condition brackets)
//console.log('addNote');
const fs = require('fs');

const fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    

    ////rewritten below
    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });

    var duplicateNotes = notes.filter((note) => note.title === title); //ES6 func - parses notes array for notes.title that matchs note.title
    
    if (duplicateNotes.length === 0) { //will change to 1 if title matches, if 0 continue
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        //console.log('Note title already exists. Try again');
    }


};

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log('Getting note[s]:', title);
};

var removeNote = (title) => {
    console.log('Removing note[s]:', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};



// var addNotes = (title, body) => {
// console.log(`adding note ${title} ${body}`)
// };

// module.exports = {
//     addNotes
// }