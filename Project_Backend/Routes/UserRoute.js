const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { ModelAuth } = require("../Model/AuthModel")
const userRouter=express.Router()

userRouter.get("/", async (req, res) => {
    try {
      const users = await ModelAuth.find(); 
  
      
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ msg: "Error fetching users", error: error.message });
    }
  });
////////////registering the user/////////////////////


userRouter.post("/signup",async(req,res)=>{
    const{name,email,password}=req.body
try {
    const existingemail=await ModelAuth.findOne({email})
    if(existingemail){
        res.status(400).send("Email id already exist")
    }
    bcrypt.hash(password,5,async(err,hash)=>{
        const user=new  ModelAuth({name,email,password:hash})
        await user.save()
        res.status(200).send("New user has been resgistered")
    })

    
} catch (error) {
    res.send({msg:error.message})
}


})



///////////login the user//////////////


userRouter.post("/signin",async(req,res)=>{
    const{email,password}=req.body

    try {
        const user=await ModelAuth.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({authorID:user._id},"masai")
                    res.status(200).send({msg:"login successfull","token":token})
                }else{
                    res.status(400).send("Wrong Credientials") 
                }
            })
            
        } else {
            res.status(400).send({ msg: "User does not exist" });
          }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports={
    userRouter
}