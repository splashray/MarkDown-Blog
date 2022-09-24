
const mongoose = require('mongoose')

const connection= 'mongodb+srv://john:1234@nodeexpressproject.fzeaurs.mongodb.net/markdown-blog?retryWrites=true&w=majority'


const connectDB = (url) =>{
    return mongoose.connect(connection,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        // useFindAndModify:false,
        useUnifiedTopology: true,
    })
}

module.exports= connectDB

