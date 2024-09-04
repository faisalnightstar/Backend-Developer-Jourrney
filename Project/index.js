const express = require('express');
const app = express();
const path = require('path')
const fs = require("fs");
const { log } = require('console');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req,res) {
    fs.readdir(`./file`, function(err,file){
        res.render("index", {file: file});
    })  
})

app.get('/file/:filename', function(req,res) {
    fs.readFile(`./file/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render('show', {filename: req.params.filename, filedata: filedata});  
    }) 
})

app.post('/create', function(req,res) {
    fs.writeFile(`./file/${req.body.title.split('').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    })    
})



app.listen(8080)