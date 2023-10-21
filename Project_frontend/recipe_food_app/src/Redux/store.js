import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage type

import { reducer as Authreducer } from "./AuthRedux/Reducer";
import { reducer as Recipereducer } from "./RecipeRedux/reducer";
import { reducer as favtreducer } from "./FavtReducer/reducer";

const rootReducers = combineReducers({
    Authreducer,
    Recipereducer,
    favtreducer
});

const persistConfig = {
    key: 'root', // Key for local storage
    storage, // Use the storage type of your choice (e.g., local storage)
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
