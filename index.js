const express = require('express')

const app = express()

app.get("/", (_, res) =>{
    res.send('server up')
})
app.get("/home", (_, res) =>{
    res.send('home up')
})
app.get("/about", (_, res) =>{
    res.send('about up')
})

app.listen(process.env.PORT||5000, () =>{
    console.log("Server up")
})