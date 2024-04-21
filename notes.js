import chalk from 'chalk'
import fs from 'fs'
import { title } from 'process'

export default ()=>{}

export function addNote(data){

    try {
        const dataString = JSON.stringify(data)
        const dataJson = JSON.parse(dataString)
    
        debugger

        const notes = fs.readFileSync('./note.json')
        let dataBuffer = notes.toString();
        let notesJson=[]

        if(dataBuffer !== ''){
            notesJson = JSON.parse(dataBuffer)
        }

        notesJson.push(dataJson)
    
        fs.writeFileSync('./note.json', JSON.stringify(notesJson))
    } catch (error) {
        console.log(chalk.bold.red.inverse(error.message))
    }
   
}

export function listNotes(){

    try {

        const notes = fs.readFileSync('./note.json')
        const notesJson = JSON.parse(notes.toString())
        return notesJson
    } catch (error) {
        console.log(chalk.bold.red.inverse(error.message))
    }
   
}

export function readNote(title){

    const notes = fs.readFileSync('./note.json')
    let dataBuffer = notes.toString();
    let notesJson=[]
    if(dataBuffer !== ''){
        notesJson = JSON.parse(dataBuffer)
        return notesJson.find((note)=> note.title === title)
    }

    return {}
}

export function removeNote(title){

    debugger
    const notes = fs.readFileSync('./note.json')
    let dataBuffer = notes.toString();
    let notesJson=[]
    if(dataBuffer !== ''){
        notesJson = JSON.parse(dataBuffer)
        let removedList =  notesJson.find((note)=> note.title !== title)
        if(removedList === undefined){
            removedList = []
        }
        fs.writeFileSync('./note.json', JSON.stringify(removedList))
        return true
    }

    return false
}