// importing createstore fuction used to create Redux store 
import { createStore,applyMiddleware,compose } from "redux";
// thunk middleware that allow you to write action creater function instead of plain action object
// to delays the evaluation of an expression or an action  i.e used to handle asynchronous action
import thunk from "redux-thunk";

// imorting rootReducer function from index.jsx
import rootReducer from "../Reducers";

// creating store 
export const Stores = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);