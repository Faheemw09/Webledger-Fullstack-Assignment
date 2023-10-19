const mongoose=require("mongoose")
const AuthSchema=mongoose.Schema({
   name:{type:String,require:true},
   email:{type:String,require:true},
   password:{type:String,require:true},

},{
    versionKey:false
})

const ModelAuth=mongoose.model("user",AuthSchema)
module.exports={
    ModelAuth
}