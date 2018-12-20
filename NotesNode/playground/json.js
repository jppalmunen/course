// var obj = {
//     name: 'JPP'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "jpp", "age": 40}';
// var personJSON = JSON.parse(personString);
// console.log(typeof personJSON);
// console.log(personJSON);

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
}
var originalNoteString = JSON.stringify(originalNote);
// originalNoteString
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
// note
console.log(typeof note);
console.log(note);