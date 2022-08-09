const path = require('path');

//Basename Method 
// console.log(path.basename(__filename));

// // folder name
// console.log(path.dirname(__filename));

// //Extname
// console.log(path.extname(__filename));

//Object
const pathObj = path.parse(__filename);

console.log(pathObj);

//String concatination
console.log(path.join(__dirname, 'database', 'mongodb', 'db.js'));