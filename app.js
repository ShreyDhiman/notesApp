const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const db = require('./dpOperations.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// add data to db
yargs.command({
    command: 'addDb',
    describe: 'Add a new note to data base',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        db.insertData(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


//remove data from db
yargs.command({
    command: 'rmDb',
    describe: 'Remove from data base',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        db.deleteData(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// read data from db
yargs.command({
    command: 'readDb',
    describe: 'read note from db',
    handler() {
        db.fetchData()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// update db entries
yargs.command({
    command: "updateDb",
    describe: "upate dp entry",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        },
        oldTitle: {
            describe: 'title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        db.updateData(argv.title, argv.body, argv.oldTitle)
    }

})

yargs.parse()