import validator from "validator"
import chalk from "chalk"
import yargs from "yargs"
import fs from 'fs'
import {addNote, listNotes} from './notes.js'

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
    .command('remove', 'Remove a note.', {}, ()=>{console.log('Remove a note.')})
    .command('list', 'List a specific note.', {}, ()=>{console.log('List a specific note.')})
    .command('read', 'Read a note.', {}, ()=>{console.log('Read a note.')})
    .help('h')
    .alias('h', 'help')
    .parse();