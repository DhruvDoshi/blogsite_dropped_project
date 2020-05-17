const express = require("express")
const app = express()


//setting up view engine -- coverrt ejs code to html
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')
})



app.listen(5000)