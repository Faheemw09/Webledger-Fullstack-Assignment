import { useNavigate } from "react-router-dom"
import { FAILURE_REQUEST, PENDING_REQUEST, SIGNUP_SUCCESS,SIGNIN_SUCCESS } from "./ActionTypes"
import axios from "axios"

export const Signup_user=(data,navigate)=>(dispatch)=>{
dispatch({type:PENDING_REQUEST})
axios.post(`https://webledger-iq4k.onrender.com/user/signup`,data)
.then((res)=>{
     
       
        dispatch({ type: SIGNUP_SUCCESS });
       
        alert('Login successful');
        navigate('/signin');
      

    
}).catch((err)=>{
    dispatch({type:FAILURE_REQUEST})
    alert('An error occurred during signup.');
})
}

export const Signin_user=(data)=>(dispatch)=>{
    dispatch({type:PENDING_REQUEST})
    axios.post(``,data)
    .then((res)=>{
        dispatch({type:SIGNIN_SUCCESS})
    }).catch((err)=>{
        dispatch({type:FAILURE_REQUEST})
    })
    }