const express=require("express");
const { SavedRecipemodel } = require("../Model/SavedRecipe");

const RouterRecipe=express.Router()

RouterRecipe.get("/",async(req,res)=>{
    try {
       
        const recipes = await   SavedRecipemodel.find({authorID:req.body.authorID});
    
       
        res.status(200).send(recipes);
      } catch (error) {
       
        res.status(400).json({ error: error.message });
      }
})

RouterRecipe.post("/create",async(req,res)=>{
  try {
    const recipes=new SavedRecipemodel(req.body)
    await recipes.save()
    res.status(200).send({"msg":"new recipe have been added"})
  } catch (error) {
    
  }
})
module.exports={
    RouterRecipe 
}