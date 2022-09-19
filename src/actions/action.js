const incrementPrice = (price) =>{
    return{
        type:'INCREMENT_PRICE',
        payload: price
    }
}
const decrementPrice = (price) =>{
    return{
        type:'DECREMENT_PRICE',
        payload: price
    }
}
const incrementQuantity = () =>{
    return{
        type:'INCREMENT_QUANTITY'
    }
}
const decrementQuantity = () =>{
    return{
        type:'DECREMENT_QUANTITY'
    }
}

export {incrementPrice, decrementPrice, incrementQuantity, decrementQuantity};