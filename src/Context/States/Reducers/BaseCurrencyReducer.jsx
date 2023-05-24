const INIT_STATE = 'usd';

export const BaseCurrencyReducer = ( state = INIT_STATE , action)=>{
    switch(action.type){
        case 'BASE_CURRENCY':
            return action.payload

        default : 
            return state;
    }
}

