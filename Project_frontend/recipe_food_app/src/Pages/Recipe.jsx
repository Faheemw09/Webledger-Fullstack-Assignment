import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipe } from '../Redux/RecipeRedux/Action';
import './Recipe.css';
import Navbar from '../Components/Navbar';
import { Button, Input, InputGroup, InputRightElement, Spinner } from '@chakra-ui/react';

const Recipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((store) => store.Recipereducer.recipe);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const isLoading = useSelector((state) => state.Recipereducer.isLoading);

  useEffect(() => {
    dispatch(fetchRecipe(page, query))
  }, [page, query]);

  const debouncedQuery = useDebounce(query, 4000);

  useEffect(() => {
    if (debouncedQuery !== null) {
      dispatch(fetchRecipe(page, debouncedQuery));
    }
  }, [page, debouncedQuery]);

  return (
    <>
      <Navbar />
      <div className="recipe-list">
        <div className='input'>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className='search-icon'>Search</div>
        </div>
        <div className='pagination'>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
          <button>{page}</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
        <div className='cardss'>
          {isLoading ? (
            <h1>Loading.............</h1>
          ) : (
            recipes?.map((recipe, index) => (
              <div className="display_cards" key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} className="img5" />
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

// Your useDebounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
