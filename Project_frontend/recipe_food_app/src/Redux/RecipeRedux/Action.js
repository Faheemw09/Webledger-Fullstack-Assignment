import axios from "axios"
import { PENDING_REQUEST, SUCCESS_REQUEST ,FAILURE_REQUEST, ADDTOFAVT} from "./ActionTypes"


const apiKey="e8d58da243d44215a53861285a0cf3d6"
const url="https://api.spoonacular.com/recipes"


export const fetchRecipe=(page,query)=>(dispatch)=>{
    let limit=12
    
    dispatch({type:PENDING_REQUEST})
   
    axios.get(`${url}/complexSearch`,{
        params: {
            apiKey: apiKey,
            number: limit,
           offset: (page - 1) * limit,
         query:query
        }
    })
    .then((res)=>{
        console.log("data",res.data.results)
        dispatch({type:SUCCESS_REQUEST,payload:res.data.results})
     
    })
    .catch((err)=>{
        dispatch({type:FAILURE_REQUEST})
    })
}


export const addFavt=(recipe,token)=>(dispatch)=>{


  dispatch({type:PENDING_REQUEST})
   axios.post(`https://back-api-gw25.onrender.com/savedrecipe/create`,recipe,{
      headers: {
          Authorization: `Bearer ${token}`
        }
  })
  .then((res)=>{
    
    dispatch({type:ADDTOFAVT,payload:res.data})
    console.log("favaction",res.data)
  
    alert("Recipe added Sucessfully")
  }) .catch((err)=>{
      dispatch({type:FAILURE_REQUEST})
      alert("Failed to add recipe to favorites. Please try again.");
  })
}
