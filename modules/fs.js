const fs = require('fs');
const path = require('path');


//Creating a new folder
// fs.mkdir(path.join(__dirname, '/folder'), {}, (err)=>{
//     if (err) throw err;
//     console.log('Folder created');
// })


//File Creating 
// fs.writeFile(path.join(__dirname, '/folder', 'sample.txt'), 'Created via node.js', (err)=>{
//     if(err) throw err;
//     console.log('File created');
// })

// fs.appendFile(path.join(__dirname, '/folder', 'sample.txt'), ' appendFile method', (err)=>{
//     if(err) throw err;
//     console.log('File created');
// })

//Reading a file
// fs.readFile(path.join(__dirname, '/folder', 'sample.txt'), 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.rename(path.join(__dirname, '/folder', 'sample.txt'),
// path.join(__dirname, '/folder', 'newSample.txt'), (err)=>{
//     if(err) throw err;
// });