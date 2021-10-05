// const fs = require('fs')

// fs.writeFileSync('notes.txt','Hello')

// console.log(fs.readFileSync('notes.txt').toString())

// fs.appendFileSync('notes.txt','\nHow are you doing?')

// console.log(fs.readFileSync('notes.txt').toString())

// const n = require('./data')

// console.log(n.sum(2,3))

// console.log(n.name1)


// const v = require('validator')
// console.log(v.isEmail('hosam@yahoo.com'))

// const ch = require('chalk')
// console.log(ch.red.bgBlue.bold.italic('Hello World'))

// console.log(process.argv)

// const command = process.argv[2]

// if (command === 'add'){
//     console.log('add item')
// } else if(command === 'delete'){
//     console.log('delete item')
// }

const yargs = require('yargs')

// version 1

// yargs.command({
//         command:'add',
//         describe:'add item',
//         handler:()=>{
//             console.log('add item')
//         }
//     })
// yargs.command({
//         command:'delete',
//         describe:'delete item',
//         handler:()=>{
//             console.log('delete item')
//         }
//     })
// yargs.command({
//     command:'read',
//     describe:'read note',
//     handler:()=>{
//         console.log('read note')
//     }
// })
// yargs.command({
//     command:'list',
//     describe:'list note',
//     handler:()=>{
//         console.log('list note')
//     }
// })
///////////////////////////////////

// version 2


// yargs.command({
//     command:'add',
//     describe:'add item',
//     builder:{
//         tittle:{
//             describe:'this is a command to add title to the task',
//             demandOption: true,
//             type:'string'
//         },
//         body:{
//             describe:'this is a command to add body to the task',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:(argv)=>{
//         console.log('the task title is ', argv.tittle)
//         console.log('the task body is ', argv.body)
//         }
//     })
// yargs.command({
//         command:'delete',
//         describe:'delete item',
//         builder:{
//             tittle:{
//                 describe:'this is a command to delete task of this tittle',
//                 demandOption:true,
//                 type:'string'
//             }
//         },
//         handler:(argv)=>{
//             console.log('delete task with tittle ', argv.tittle)
//         }
//     })
// yargs.command({
//     command:'read',
//     describe:'read note',
//     builder:{
//         tittle:{
//             describe:'this is a command to read task of this tittle',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:(argv)=>{
//         console.log('read task with tittle ', argv.tittle)
//     }
// })
// yargs.command({
//     command:'list',
//     describe:'list note',
//     handler:(argv)=>{
//         console.log('list note ',argv)
//     }
// })

//////////////////////////////////////////////////////////////////////////////////

// version 3

const notes = require('./notes')

yargs.command({
    command:'add',
    describe:'add item',
    builder:{
        title:{
            describe:'this is a command to add title to the task',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'this is a command to add body to the task',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
        
        console.log('the task title is ', argv.title)
        console.log('the task body is ', argv.body)
        }
    })
yargs.command({
        command:'delete',
        describe:'delete item',
        builder:{
            title:{
                describe:'this is a command to delete task of this tittle',
                demandOption:true,
                type:'string'
            }
        },
        handler:(argv)=>{
            notes.deleteNote(argv.title)
            console.log('delete task with tittle ', argv.title)
        }
    })
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'this is a command to read task of this tittle',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.findNote(argv.title)
        // const read = notes.loadNotes()
        // console.log('read task with tittle ', argv.title)
        // console.log(read.find((note)=>{ return note.title === argv.title}))
    }
})
yargs.command({
    command:'list',
    describe:'list note',
    handler:(argv)=>{
        notes.noteList()
        // const list = notes.loadNotes()

        // console.log(list)
    }
})






// console.log(yargs.argv)

yargs.parse()