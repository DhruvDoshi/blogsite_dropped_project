const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

//setting up view engine -- coverrt ejs code to html
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        tittle: "Text Article",
        createdAt: Date.now(),
        description: 'Test Description'
    }]
    res.render('index.ejs', { articles: articles})
})



app.listen(5000)