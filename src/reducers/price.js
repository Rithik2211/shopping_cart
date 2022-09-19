const priceReducer =(state =0, action) => {
    switch (action.type){
        case 'INCREMENT_PRICE':
            return state + action.payload
        case 'DECREMENT_PRICE':
            return state - action.payload
         default:
             return state       
    }
};

export default priceReducer ;