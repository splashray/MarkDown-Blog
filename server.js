require('dotenv').config()
const express = require('express')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()
const connectDB = require('./db')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

app.get('/',async(req,res)=>{
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index',{articles:articles})
})
app.use('/articles', articleRouter)


const port = 5000;

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port,  console.log(`Server is listening port ${port}...`));
    } catch (error) {
    console.log(error);
  }
};
 
start();

