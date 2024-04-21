import validator from "validator"
import chalk from "chalk"
import yargs from "yargs"
import fs from 'fs'
import {addNote, listNotes, readNote, removeNote} from './notes.js'

const success = chalk.bold.inverse.green
const failure = chalk.bold.inverse.red
const argv = yargs(process.argv.slice(2))
    .usage('Usage : $0 <command>')
    .example('$0 add', 'To add a new note.')
    .command('add', 'Add a new note.', (yargsBuilder)=>
    yargsBuilder.options('title', {
            describe:'Title for the note',
            demandOption: true,
            type: 'string',
        },
        'description', {
            describe: 'Description for the note',
            demandOption: true,
            type: 'string',
        }), (argv)=>{
        const object = {'title':argv.title, 'description':argv.description}
        addNote(object)
    })
    .command('remove', 'Remove a note.', (yargsBuilder)=>{
        return yargsBuilder.options('title', {
            describe:'Title of the note to remove',
            type:'string',
            demandOption:true
        })
    }, (argv)=>{
        const title = argv.title;
        const result = removeNote(title.toString())
        console.log('Is data removed : '+result)
    })
    .command('list', 'List a specific note.', (yargsBuilder) =>{}, ()=>{
        const notes = listNotes()
        console.log(notes)
    })
    .command('read', 'Read a note.', (yargsBuilder)=>{
        yargsBuilder.options('title', {
            describe:'Title of the note to read',
            type:'string',
            demandOption:true
        })
    }, (argv)=>{
       const readNoteData = readNote(argv.title)
       console.log(readNoteData)
    })
    .help('h')
    .alias('h', 'help')
    .parse();