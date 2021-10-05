const fs = require('fs')

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicatTitles = notes.find((note)=>{
        return note.title === title
    })
    if (!duplicatTitles){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('Saved Succesfully')
    }else{
        console.log('Erorr Duplicated Title')
        console.log(duplicatTitles)
    }
}

const deleteNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })
    saveNotes(notesToKeep)
    console.log('Deleted Successfully')
}

const findNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>{
        return note.title == title
    })
    if (note){
        console.log(note)
        console.log(note.title + ' : ' + note.body)
    }else{
        console.log('Not Found')
    }
}

const noteList = ()=>{
    const notes = loadNotes()
    if (notes.length === 0){
        console.log('There is no notes')
    }else{
        notes.forEach((note)=>{
            console.log(note)
            console.log(note.title + ' : ' + note.body)
    })
}
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    const saveNotes = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveNotes)
}



module.exports = {
    addNote,
    findNote,
    deleteNote,
    noteList
}