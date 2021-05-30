const path = require('path')

console.log(path.sep)

const filePart = path.join('/content', 'text.txt')
console.log(filePart)

const base = path.basename(filePart)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'text.txt')
console.log(absolute)