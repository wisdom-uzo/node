const {readFileSync, writeFileSync, readFile} = require('fs')

const first = readFileSync('./content/fest.txt', 'utf8');
const text = readFileSync('./content/text.txt', 'utf8');

console.log(text)
console.log(first)

const write = writeFileSync('./content/write_file.txt', 'hello, am learning node.js ')