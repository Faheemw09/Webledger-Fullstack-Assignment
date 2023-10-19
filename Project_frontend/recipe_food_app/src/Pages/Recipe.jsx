//.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipe } from '../Redux/RecipeRedux/Action';
import './Recipe.css';
import Navbar from '../Components/Navbar';


const Recipe = () => {
  const dispatch = useDispatch();
  const recipes= useSelector((store) =>  store.Recipereducer.recipe)
 
  const {isLoading }= useSelector((state) => state.Authreducer.isLoading);

console.log("recipes",recipes)

  useEffect(() => {
    dispatch(fetchRecipe()); 
  }, []);

  return (
    <>
    <Navbar/>
    <div className="recipe-list">
    <div className='cards'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        
        recipes?.map((recipe, index) => (
          
            <div className="display_card">
            <img src={recipe.image} alt={recipe.title} className="img2" />
            <h2>{recipe.title}</h2>
          </div>
          
        ))

      )}
      </div>
    </div>
    </>
  );
};

export default Recipe;
