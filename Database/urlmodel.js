import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    url:{
        type:String,
    },
    shorturl:{
        type:String,
    }
   
})

const urlModel = mongoose.model("url",urlSchema)

export default urlModel;