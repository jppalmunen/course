/*module.exports.addNote = () => {
    console.log('addNoted');
    return 'New Note';
}*/

const fs = require('fs');

var fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }

};

var saveNotes = (notes) =>  {
    try{
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        return true;
    }catch(e){
        console.log(e);

    }
};

var addNote = (title,body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }

    let duplicateNotes = notes.filter((note) => note.title === title);
 
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
        
    }
    
    
};

var getAll = () => {
    console.log('Getting all');
}

var getNote = (title) => {
    console.log('get note ' +title);
}

var removeNote = (title) => {
    let notes = fetchNotes();
    let afterFiltering = notes.filter((note) => note.title !== title);
    saveNotes(afterFiltering);
    return notes.length !== afterFiltering.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
