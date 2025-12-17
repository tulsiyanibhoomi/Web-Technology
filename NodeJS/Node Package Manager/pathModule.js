var path = require("path")

console.log(path.isAbsolute('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT'))
console.log(path.basename('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf'))
console.log(path.dirname('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf'))
console.log(path.normalize('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf'))
console.log(path.join('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf','C:\\Users\\jagdi\\Desktop\\Web Technology\\ES6\\forOf.html'))
console.log(path.resolve('Web Technology','forOf.html'))
console.log(path.relative('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf','C:\\Users\\jagdi\\Desktop\\Web Technology\\ES6\\forOf.html'))
console.log(path.extname('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf'))
console.log(path.parse('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf'))
console.log(('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf').split(path.sep))
console.log(path.toNamespacedPath('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf'))
console.log(path.format({
    root: 'C:\\',
    dir: 'C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT',
    base: 'Lab Manual.pdf',
    ext: '.pdf',
    name: 'Lab Manual'
  }))