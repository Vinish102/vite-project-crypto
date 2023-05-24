const BaseCurrencyAction = (type)=>{
    return{
        type: 'BASE_CURRENCY' ,
        payload: type,
    }
}

export {BaseCurrencyAction};