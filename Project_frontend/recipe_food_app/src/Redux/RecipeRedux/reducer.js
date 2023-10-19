import { FAILURE_REQUEST, PENDING_REQUEST, SUCCESS_REQUEST } from "./ActionTypes"


const initialstate={
    isLoading:false,
    isError:false,
   recipe:[]
}


export const reducer=(state=initialstate,{type,payload})=>{

    switch (type){
        case PENDING_REQUEST :
            return {...state,isLoading:true}
case SUCCESS_REQUEST:
    return{...state,recipe:payload,isLoading:false}

                    case FAILURE_REQUEST:
                        return {...state,isLoading:false,isError:true}
                        default:
                         return state
    }
}