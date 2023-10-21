import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavt, deleteFavt } from '../Redux/FavtReducer/Action';
import Navbar from '../Components/Navbar';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const FavtList = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.Authreducer.token);
  const favtlists = useSelector((store) => store.Recipereducer.favt);
  console.log("favt",favtlists)
  
  const favtred=useSelector((store)=>store. favtreducer.favtlist)
  console.log("favtlistfav" ,favtred)
  const authorID=favtlists.map((ele)=>ele.authorID)
 
  const [addfvt,setAddfavt]=useState()
  

  useEffect(() => {
    if (token) {
      dispatch(getFavt(token,authorID));
    }
  }, [ token]);

  const handleDelete = (recipeId) => {
    dispatch(deleteFavt(recipeId, token));
  };

  return (
    <div>
      <Navbar />
      <div className="recipe-list">
        <div className='cardss'>
          {favtred.length > 0 ? (
            favtred.map((recipe) => (
              <div className="display_cards" key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} className="img5" />
                <h2>{recipe.title}</h2>
                <div onClick={() => handleDelete(recipe.id)}>
                  <DeleteOutlinedIcon />
                </div>
              </div>
            ))
          ) : (
            <p>No favorite recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavtList;
