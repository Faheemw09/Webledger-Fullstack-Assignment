import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"

import { reducer as Authreducer } from "./AuthRedux/Reducer";
import { reducer as Recipereducer } from "./RecipeRedux/reducer";

const root_reducers=combineReducers({
    
    Authreducer,
    Recipereducer

})

export const store=legacy_createStore(root_reducers,applyMiddleware(thunk))