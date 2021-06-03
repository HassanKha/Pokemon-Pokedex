import {combineReducers} from "redux";
import pockemonReducer from './pockemonReducer';
import searchedReducer from './searchReducer'
const rootReducer = combineReducers({
   MyPokedex: pockemonReducer,
   Searched:searchedReducer
});


export default rootReducer;