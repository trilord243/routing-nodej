import express from "express"
import http from "http"
import bodyParser from "body-parser";
import {router as shopRoutes} from "./routes/shop.js"
import {router as adminRoutes} from "./routes/admin.js"
const app=express()


app.use(bodyParser.urlencoded( {extended: false} ));
app.use(shopRoutes)
app.use("/admin",adminRoutes)

app.use(   (req, res, next)=>{
    res.status(404).send("<h1>Pagina no encontrada</h1>")
} )




app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
