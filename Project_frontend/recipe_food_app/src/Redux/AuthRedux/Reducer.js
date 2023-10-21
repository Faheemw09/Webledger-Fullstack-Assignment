import { FAILURE_REQUEST, PENDING_REQUEST, SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGN_OUT } from "./ActionTypes"


const initialstate={
    isLoading:false,
    isError:false,
    token:"",
    isAuth:false,
    users:[]
}


export const reducer=(state=initialstate,{type,payload})=>{

    switch (type){
        case PENDING_REQUEST :
            return {...state,isLoading:true}

            case SIGNUP_SUCCESS:
                return {...state,isLoading:false}

                case SIGNIN_SUCCESS:
                    return {...state,isLoading:false,isAuth:true,token:payload}

                    case SIGN_OUT:
                        return { ...state, isAuth: false, token: "" };
                    case FAILURE_REQUEST:
                        return {...state,isLoading:false,isError:true}
                        default:
                         return state
    }
}