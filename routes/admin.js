import express from "express";

export const router = express.Router();

router.post("/product" ,(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")

}  )

router.use("/add-app" ,(req,res,next)=>{
    console.log("Middleware 2");
    res.send('<form  action="/admin/product"  method="post"> <input type="text" name="tittle"/> <button type="submit" >Send</button>  </form>')

}  )





