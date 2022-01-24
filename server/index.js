const express=require('express')
const connectToMongo=require('./connection/db')
const cors=require('cors')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT||5000
app.use(express.json())
connectToMongo();
app.use(cors())


app.use('/',require('./route') )

app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`);
})