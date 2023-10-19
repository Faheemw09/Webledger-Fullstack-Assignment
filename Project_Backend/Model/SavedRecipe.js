const mongoose=require("mongoose")


const SavedRecipeSchema=mongoose.Schema({
title:{type:String,require:true},
image:{type:String,require:true},
authorID:{type:String,require:true}

}
,{
    versionKey:false
})
const SavedRecipemodel=mongoose.model("savedrecipe",SavedRecipeSchema)


module.exports={
    SavedRecipemodel
}