import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useNavigate } from "react-router-dom"; // Import useHistory and useLocation
import { addFavt, fetchRecipe } from "../Redux/RecipeRedux/Action";
import "./Recipe.css";
import Navbar from "../Components/Navbar";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import useDebounce from "../Hooks/UseDebounce";

const Recipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((store) => store.Recipereducer.recipe);
  const [query, setQuery] = useState("");
  const isLoading = useSelector((store) => store.Recipereducer.isLoading);
  const token = useSelector((store) => store.Authreducer.token);
  const favtlists = useSelector((store) => store.Recipereducer.favt);
  const navigate = useNavigate(); // Access the history object
  const location = useLocation(); // Access the location object

  const queryParams = new URLSearchParams(location.search);
  const pageParam = queryParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  useEffect(() => {
    dispatch(fetchRecipe(page, query));
  }, [page, query]);

  const debouncedQuery = useDebounce(query, 4000);

  useEffect(() => {
    if (debouncedQuery !== null) {
      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.set("page", "1"); // Reset page to 1 when changing the query
      navigate({ search: newSearchParams.toString() });
      dispatch(fetchRecipe(1, debouncedQuery));
    }
  }, [debouncedQuery]);

  const handlefavt = (recipe) => {
    dispatch(addFavt(recipe, token, navigate));

    // console.log('Recipe added', recipe, token);
  };

  const goToPage = (newPage) => {
    if (newPage >= 1) {
      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.set("page", newPage.toString());
      navigate({ search: newSearchParams.toString() });
    }
  };

  return (
    <>
      <Navbar />
      <div className="recipe-list">
        <div className="input">
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="search-icon">Search</div>
        </div>
        <div className="pagination">
          <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
            Prev
          </button>
          <button>{page}</button>
          <button onClick={() => goToPage(page + 1)}>Next</button>
        </div>
        <div className="cardss">
          {isLoading ? (
            <h1>Loading.............</h1>
          ) : (
            recipes?.map((recipe, index) => (
              <div className="display_cards" key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} className="img5" />
                <h2>{recipe.title}</h2>
                <div className="icon" onClick={() => handlefavt(recipe)}>
                  <FavoriteOutlinedIcon />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Recipe;
