import React from 'react';
import { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import {incrementPrice, decrementPrice, incrementQuantity, decrementQuantity} from './actions/action';


 const Card = (props)=>{
    
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    const increment = (price) =>{
      //  if (quantity>=50) return
       setQuantity(quantity + 1)
       dispatch(incrementPrice(price))
       dispatch(incrementQuantity())
    }

    const decrement = (price) =>{
       if(quantity<=0) return
       setQuantity(quantity-1)
       dispatch(decrementPrice(price))
       dispatch(decrementQuantity())
    }
    return (
        <div className='card'>
        
          <div className='card__body'>
               <img src={props.img} className='card__img'/>
               <h1 className='card__title'> {props.title} </h1>
               <p className='card__description'> {props.desc} </p>
               <h3 className='card__price'>Rs. {props.price}</h3>             
            </div> 
               
            <div>
               <button className='card__btn' onClick={() => decrement(props.price)}>  -  </button>
               <button className='display' >{quantity}</button>
               <button className='card__btn' onClick={() => increment(props.price)}>  +  </button> 
            </div>    

         </div>
    );
};

export default Card;
