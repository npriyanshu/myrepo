const express = require ('express')
const path = require ('path')
 
const app = express();

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user = {
        name : 'priyanshu',
        email : 'npria@gkas.come',
        skills : ['c++','python','js','c','html','css']
    }
    res.render('profile',{user});
})
app.listen(5000);