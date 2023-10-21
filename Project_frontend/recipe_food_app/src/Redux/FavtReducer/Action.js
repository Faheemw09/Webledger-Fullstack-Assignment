import axios from "axios";
import {
  FAVT_REQUEST_FAILURE,
  FAVT_REQUEST_PENDING,
  FAVT_REQUEST_SUCCESS,
} from "./ActionTypes";

export const getFavt = (token, authorID) => (dispatch) => {
  dispatch({ type: FAVT_REQUEST_PENDING });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(
      `https://back-api-gw25.onrender.com/savedrecipe?authorID=${authorID}`,
      config
    )
    .then((res) => {
      dispatch({ type: FAVT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAVT_REQUEST_FAILURE });
    });
};

export const deleteFavt = (recipeId, token) => (dispatch) => {
  dispatch({ type: FAVT_REQUEST_PENDING });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .delete(
      `https://back-api-gw25.onrender.com/savedrecipe/${recipeId}`,
      config
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FAVT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAVT_REQUEST_FAILURE });
    });
};
