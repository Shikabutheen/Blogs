import  express from 'express';
import dotenv from 'dotenv';





import mongoose from 'mongoose'; 
import cors from 'cors'   

import bodyParser from 'body-parser';
import postRouter from './router/posts.js';

const app=express();
 dotenv.config();
const PORT=process.env.PORT || 8000;   // this take port from env file or 5000

app.use(bodyParser.json());  // it will parse json data

app.use(cors())


// mongodb connection       

mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("Mongo DB connected"))
.catch((err)=>console.log('DB err',err));

//use routes
app.use('/api/posts',postRouter);   // it will use post routes

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})