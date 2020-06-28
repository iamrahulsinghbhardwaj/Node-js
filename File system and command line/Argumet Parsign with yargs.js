//npm i yargs

const chalk=require('chalk')
const yargs=require('yargs')
const getNotes=require('./notes.js')
const { describe } = require('yargs')

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function(){
        console.log('Adding a new note!!')
    }
})

//remove
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing a note')
    }
})

//read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading a note')
    }
})

//list command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler:function(){
        console.log('Listing out all notes')
    }
})
console.log(yargs.argv)
