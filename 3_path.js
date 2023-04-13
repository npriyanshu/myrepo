const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'learning');
const files = {"hello.txt":"hello bhai jaan ",
"kaha_ho.txt":"ghar pe",
"kya_kar_rhe_ho.txt":"kuch ni bhai bs padh raha hu"};


// creating multiple files in a dir 
for(file in files){
    fs.writeFileSync(dirpath+"/"+file,files[file]);
}

// reading dir 
fs.readdir(dirpath,(err,items)=>{
    items.forEach((item)=>{
        console.log(item);
    })
})