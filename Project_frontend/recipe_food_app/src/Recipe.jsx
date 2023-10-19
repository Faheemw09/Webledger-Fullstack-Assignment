// import React, { useEffect, useState } from "react";

// function RecipeSearch() {
//   const [recipes, setRecipes] = useState([]);
//   const apiKey = "6be3d94780684d63951fe4fd698eb425"; // Replace with your actual API key
//   const query = "pasta"; // Replace with the desired search query

//   useEffect(() => {
//     // Construct the API URL with the query and API key
//     const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

//     // Make a GET request to the API
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.results)
//         setRecipes(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // The empty dependency array ensures this effect runs only once on component mount

//   return (
//     <div>
//       <h1>Recipe Search</h1>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe.id}>{recipe.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RecipeSearch;