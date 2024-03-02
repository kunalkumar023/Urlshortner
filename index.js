import express from "express";
import shortid from "shortid";
import connectToMongo from "./Database/Database.js";
import urlModel from "./Database/urlmodel.js";
import cors from 'cors'

const app = express();
connectToMongo();
app.use(express.json())
app.use(cors())



app.post("/convert",async(req,res)=>{
    const {url} = req.body;
    const generateurl = shortid.generate();
    const shortUrl = "http://localhost:4000/" + generateurl;
    const newUrl = new urlModel({url:url,shorturl:shortUrl})
    await newUrl.save()
    res.json({
        shortUrl
    })
})

app.get("/:id",async(req,res)=>{
   const id = req.params.id;
   console.log(id)
   const shortUrl = "http://localhost:4000/" + id
   const {url} = await urlModel.findOne({shorturl:shortUrl})
    res.redirect(url)
})


app.listen(4000,()=>{
    console.log("Server is connected");
})