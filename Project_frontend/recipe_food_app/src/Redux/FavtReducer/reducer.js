import { FAVT_REQUEST_FAILURE, FAVT_REQUEST_PENDING, FAVT_REQUEST_REMOVE, FAVT_REQUEST_SUCCESS } from "./ActionTypes"







const initialstate={
    isLoading:false,
    isError:false,
    favtlist:[]
}

export const reducer=(state=initialstate,{type,payload})=>{

    switch (type){
        case FAVT_REQUEST_PENDING :
            return {...state,isLoading:true}

case FAVT_REQUEST_SUCCESS:
    return{...state,favtlist:payload,isLoading:false}
    
    case FAVT_REQUEST_REMOVE:
    return{...state,favtlist:payload}

                    case FAVT_REQUEST_FAILURE:
                        return {...state,isLoading:false,isError:true}
                        default:
                         return state
    }
}