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

RouterRecipe.get('/:userId', (req, res) => {
  const userId = req.params.userId;

  // Query the database for saved recipes that match the userId
  SavedRecipemodel.find({ authorID: userId })
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while fetching saved recipes.' });
    });
});

RouterRecipe.post("/create",async(req,res)=>{
  try {
    const recipes=new SavedRecipemodel(req.body)
   const saved= await recipes.save()
    res.status(200).send(saved)
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
})



RouterRecipe.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await SavedRecipemodel.findOne({ _id: id });

    if (!recipe) {
      return res.status(404).send({ msg: "Recipe not found" });
    }

    if (req.body.authorID !== recipe.authorID) {
      return res.status(401).send({ msg: "You are not authorized to delete this recipe" });
    }

    await SavedRecipemodel.findByIdAndDelete(id);

    res.status(200).send(`Recipe with ID ${id} has been deleted`);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

module.exports={
    RouterRecipe 
}