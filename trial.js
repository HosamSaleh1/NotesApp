const person = {
    name:'Hosam',
    age:'34'
}
const personJson = JSON.stringify(person)

const fs = require('fs')

// fs.writeFileSync('Txt.json',personJson)

const jsonData = fs.readFileSync('Txt.json').toString()
const dataObj = JSON.parse(jsonData)
// console.log(dataObj)

dataObj['name']='Omar'
const dataJson = JSON.stringify(dataObj)
fs.writeFileSync('Txt.json',dataJson)
// console.log(dataObj)
// console.log(dataJson)

const jsondata2 = fs.readFileSync('Txt.json').toString()

console.log(jsondata2)

const dataObj2 = JSON.parse(jsondata2)

console.log(dataObj2)