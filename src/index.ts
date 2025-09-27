import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prismaClient = new PrismaClient();    


app.get("/",async (req,res) => {
    const users = await prismaClient.user.findMany();
    res.json({
        "message" : "Get Endpoints !",
        users
    })
})

app.post("/",async (req,res) => {
    await prismaClient.user.create({
    data : {
        username : Math.random().toString(),
        email : Math.random().toString()
    }
}) 
    res.json({
        "message" : "Get Endpoints !"
    })
})

app.listen(3000,()=>{
    console.log("Connected to 3000  ");
});