import axios from "axios"
import { PENDING_REQUEST, SUCCESS_REQUEST ,FAILURE_REQUEST} from "./ActionTypes"


const apiKey="33650e18c02747399042f1786c38c03e"
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
