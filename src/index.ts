import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.json({
        "message" : "Get Endpoints !" 
    })
})

app.post("/",(req,res) => {
    res.json({
        "message" : "Post Endpoints !" 
    })
})

app.listen(3000,()=>{
    console.log("Connected to 3000  ");
});