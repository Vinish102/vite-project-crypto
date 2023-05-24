const INIT_STATE = [];

export const CoinsListReducer = ( state = INIT_STATE , action)=>{
    switch(action.type){
        case "COINS_LIST":
            return action.payload

        default : 
            return state;
    }
}

