// importing all the reducers into single file

import { combineReducers } from "@reduxjs/toolkit";
import { BaseCurrencyReducer } from "./BaseCurrencyReducer";
import { CoinsListReducer } from "./CoinsListReducer";


// combining all the reducers to a single variable object
const rootReducer = combineReducers({
    BaseCurrency : BaseCurrencyReducer,
    CoinsList : CoinsListReducer
});


export default rootReducer;