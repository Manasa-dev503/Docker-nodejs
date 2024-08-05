require('dotenv').config()
var express = require('express')
var fs = require('fs')
var app = express()
app.use(express.static('public'))
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))





app.get('/',function(req,res){
  res.sendFile(__dirname+"/public/Navbar.html")
   
})

app.get("/aboutus",function(req,res){
    res.sendFile(__dirname+"/Aboutus.html")
})

app.get("/contactus",function(req,res){
  res.sendFile(__dirname+"/Contactus.html")
})


app.post('/contact',function(req,res){
  console.log(req.body)
  var data = JSON.parse(fs.readFileSync("contacts.txt").toString())
  data.push(req.body)
  fs.writeFileSync("contacts.txt",JSON.stringify(data))
 
  
})



app.listen(process.env.PORT,function(){console.log(`server is running on port ${process.env.PORT}`)})


