import { useNavigate } from "react-router-dom"
import { FAILURE_REQUEST, PENDING_REQUEST, SIGNUP_SUCCESS,SIGNIN_SUCCESS } from "./ActionTypes"
import axios from "axios"

export const Signup_user=(data,navigate)=>(dispatch)=>{
dispatch({type:PENDING_REQUEST})
axios.post(`https://back-api-gw25.onrender.com/user/signup`,data)
.then((res)=>{
     
       
        dispatch({ type: SIGNUP_SUCCESS });
       
        alert('Signup successful');
        navigate('/signin');
      

    
}).catch((err)=>{
    dispatch({type:FAILURE_REQUEST})
    alert('An error occurred during signup.');
})
}





// Signin_user action
export const Signin_user = (obj) => (dispatch) => {
  dispatch({ type: PENDING_REQUEST });
return axios
    .post(`https://back-api-gw25.onrender.com/user/signin`, obj)
    .then((res) => {
      console.log("reslogin", res.data.token);

      dispatch({ type: SIGNIN_SUCCESS, payload: res.data.token });

   

    })
    .catch((err) => {
      dispatch({ type: FAILURE_REQUEST });

      if (err.response.status === 400) {
        alert('Invalid email or password');
      } else {
        alert('An error occurred. Please try again.');
      }
    });
};




export const signOut = () => {
  return {
    type: 'SIGN_OUT', // Define an appropriate action type
  };
};