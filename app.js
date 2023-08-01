const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use((req, res, next)=>{

    next()
})

app.get("/", (req,res, next) =>{
    
    console.log(__dirname); 
res.sendFile(__dirname + "/home.html")

})

app.get("/about", (req, res, next)=>{
    res.sendFile(__dirname + "/views/About.html")
})

app.get("/works",(req,res, next) =>{
    res.sendFile(__dirname + "/views/Works.html")
})

app.get("/gallery",(req,res, next) =>{
    res.sendFile(__dirname + "/views/Gallery.html")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})