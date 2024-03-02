import mongoose from "mongoose";

const connectToMongo= async()=>{
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/urlshortner").then(console.log("Database is connected"))
    .catch("Error in connecting database")

}

export default connectToMongo;