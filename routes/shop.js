import express from "express";

export const router = express.Router();

router.get("/", (req,res,next)=>{
    console.log("Middleware 2");
    res.send("<h1>hola</h1>")

}  )