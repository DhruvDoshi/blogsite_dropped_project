const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

//setting up view engine -- coverrt ejs code to html
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        tittle: "Text Article",
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        tittle: "Text Article 2",
        createdAt: new Date(),
        description: 'Test Description 2'
    }]
    res.render('articles/index.ejs', { articles: articles})
})



app.listen(5000)