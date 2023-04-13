const fs = require('fs');
const path = require('path');
let dirpath = path.join(__dirname,"crud");
let filepath = `${dirpath}/apple.txt`;

// fs.writeFileSync(filepath,"a simple text file.")


// if we didn't pass the utf8 param in middle it will show buffer 
// fs.readFile(filepath,'utf8',(err,data)=>{
//     console.log(data)
// })

// we can append data in file like this 
// fs.appendFile(filepath,'\nnachne chalte hain',(err)=>{
//     if(!err){
//         console.log('updated');
//     }

// });

// we can change file name 
fs.rename(filepath,`${dirpath}/changed_name.text`,(err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });