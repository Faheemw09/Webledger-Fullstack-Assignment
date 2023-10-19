const express=require("express")
const cors=require("cors")
const { Connection } = require("./db")
const { userRouter } = require("./Routes/UserRoute")
const { RouterRecipe } = require("./Routes/SavedRecipe")
const { auth } = require("./Middleware/Authmiddleware")

const app=express()
app.use(cors())
app.use(express.json())
require("dotenv").config()

app.use("/user",userRouter)
app.use(auth)
app.use("/savedrecipe",RouterRecipe)


app.listen(process.env.port,async()=>{
    console.log(`server is running on ${process.env.port}`)
    try{

         await  Connection
         console.log("server is connected to db")
    }catch(error){
    console.log(`something went wrong${error.message}`)
    }
})