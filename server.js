const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dhruv:dhruv25071999@cluster0-szusn.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
  });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)