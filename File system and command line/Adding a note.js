const fs=require('fs')
const getNotes=function(){
    return 'Notes .....'
}

const addNote=function(title,body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title===title
    })
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note title taken')
    }
   
}


const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJSON=databuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
module.exports={
    getNotes: getNotes,
    addNotes: addNote,
    
}
