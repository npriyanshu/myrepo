import fs from 'fs';
// this is how we can read file 
const home = readFileSync("./a.html");

// we can import packages like this
// const http = require("http");

// but if we have changed the type of package to the module then this is how we import a module
import http from "http"

// and this is how we can import module from a file 
// const gfname = require("./features");

// if we are using import then we must not forget the extension of the file
// gfnae here is a export default so we can name it any thing  

// import gfname from "./features.js";

// but we cannot change the name of these 
import gfname,{gfname2,gfnamedf} from "./features.js"
// we can also export all as an obj 
// import * as Mydbj from ".features.js"
// console.log(Mydbj);

console.log(`the love is ${gfnamedf()}`);
// first we have to create a server like this 
// server has two arg request and Response 

const server = http.createServer((req, res) => {
    // to show something on the server locahost we do this
    if (req.url === "/about") {
        res.end("what the fuids");
        
    }
    else if (req.url === "/kan") {
            res.end(home)
        
        
    }
    
    else if (req.url === "/") {
        res.end("acalt")
    }
    else {
        res.end(`the love is ${gfnamedf()}`)
    }

});

// after creating server we need a listner or handler to use it 
// the listener will listen to the server 
// first arg of the server is port no and second arg is host name or we can also skip that
// and directlly give a listener to it  
// we can say that sever listener is an event works when server is created 
server.listen(5500, () => {

    console.log("Server is working")

})