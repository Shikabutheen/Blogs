import mongoose from "mongoose";    

const postSchema=new mongoose.Schema({

    title:{type :String,rquired:true},
    content:{type :String,rquired:true},
    category:{type :String,rquired:true},
    author:{type :String,rquired:true},
    createdAt:{type:Date,default:Date.now} ,     // it will take current date    
    updatedAt:{type:Date,default:Date.now},      // it will take current date
    image:{type:String}      // it will store image url

})

 export const Post=mongoose.model('Post',postSchema);   // it will create a collection named posts in db