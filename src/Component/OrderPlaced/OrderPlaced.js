import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../images/giphy.gif';

function OrderPlaced() {
  const navigate = useNavigate();

  const handleGobackToShop = () => {
    navigate('/shop');
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>😀😀 Your Order Has been Confirmed 😀😀</h1>

      <img
        style={{marginTop:"10px", height:"300px"}}  
        src={img}
        alt='img'
      />
      <br/>

      <button
        className='orderNowButton'
        onClick={handleGobackToShop}
      >Go Back To Shop</button>
    </div>
  )
}

export default OrderPlaced
