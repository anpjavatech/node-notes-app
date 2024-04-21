import chalk from 'chalk'
import fs from 'fs'

export default ()=>{}

export const addNote = (data) =>{

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

export const listNotes = () =>{

    try {

        const notes = fs.readFileSync('./note.json')
        const notesJson = JSON.parse(notes.toString())
        return notesJson
    } catch (error) {
        console.log(chalk.bold.red.inverse(error.message))
    }
   
}