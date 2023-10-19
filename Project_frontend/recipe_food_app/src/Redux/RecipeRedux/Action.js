import axios from "axios"
import { PENDING_REQUEST, SUCCESS_REQUEST ,FAILURE_REQUEST} from "./ActionTypes"


const apiKey="32e5d9edaf8148d88f920bc5f55d420c"
const url="https://api.spoonacular.com/recipes"
export const fetchRecipe=()=>(dispatch)=>{

    dispatch({type:PENDING_REQUEST})
   
    axios.get(`${url}/complexSearch?apiKey=${apiKey}`)
    .then((res)=>{
        console.log("data",res.data.results)
        dispatch({type:SUCCESS_REQUEST,payload:res.data.results})
     
    })
    .catch((err)=>{
        dispatch({type:FAILURE_REQUEST})
    })
}