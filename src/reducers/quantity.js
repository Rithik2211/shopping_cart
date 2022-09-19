const quantityReducer =(state=0, action) => {
    switch (action.type){
        case 'INCREMENT_QUANTITY':
            return state + 1
        case 'DECREMENT_QUANTITY':
            return state- 1
         default:
             return state       
    }
};

export default quantityReducer;