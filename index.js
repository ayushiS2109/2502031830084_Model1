const express = require("express")
const app =express()

app.listen(3000, () => {
    console.log('hello aayushi');
});

app.get('/',(req, res) =>{
    res.send("<h1>hello how are you aayushi</h1>")
})

app.get('/about',(req, res) =>{
    res.send("<h1>about page</h1>")
})

app.get('/gallery',(req, res) =>{
    res.send("<h1>gallery page</h1>")
})

app.get('/about/user',(req, res) =>{
    res.send("<h1>user page page</h1>")
})

app.get('/about/user',(req, res) =>{
    res.send("<h1>about page</h1>")
})