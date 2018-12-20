console.log('starting app...')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command = process.argv[2];
console.log('Yargs', yargs.argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log(typeof note);
    if(_.isObject(note)){
        console.log("New note", note.title);
    }else{
        console.warn(`Note ${argv.title} not written`);
    }
}else if (command === 'list') {
    notes.getAll();
}else if (command === 'read') {
    let note = notes.getNote(argv.title);
    let message =  note ? `Here's note\n ${argv.title}` : `Note not found`;
    console.log(message);
}else if (command === 'remove') {
    let noteRemoved= notes.removeNote(argv.title);
    let message = noteRemoved ? `Note ${argv.title} removed` : `Note ${argv.title} not removed`;
    console.log(message);

}else {
    console.log('command not found');
}
