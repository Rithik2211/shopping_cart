import * as React from 'react';
import Card from './Card';
import './style.css';
import cartItems from './data';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function App() {
  const price = useSelector(state => state.priceReducer)
  const quantity = useSelector(state => state.quantityReducer)
  return (
    <div className='home'>
      <div className='card_margin'>
        <div className='main_card'>
          <div className='header'>
                 <h1 className='cart_header'><ArrowBackIcon /> Shop</h1>
          </div>
          {cartItems.map((product => {
            return <Card key={product.id} img={product.image} title={product.title} desc={product.desc} price={product.price} />
          }))} 
          <div className='cart_addBtn'>
            <Button variant="contained">Add Products</Button>
          </div>      
          <div className='footer'>
            <div className='print_cart'>
              <h2 className='quantity_display'>{quantity} Products Selected | Total Price : Rs.{price}</h2>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;

//  {/* <Card  img="img1.jpg" title="Perfume" desc="Good Fragnence" price ="250" />
//        <Card  img="img2.jpg" title="Watch"  desc="Good time" price= "450"/>
//        <Card  img="img3.jpg" title="Headphones" desc="Good Fit" price= "950"/> */}

// 