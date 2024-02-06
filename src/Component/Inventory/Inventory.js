import React from 'react'
import { useNavigate } from 'react-router-dom';

function Inventory() {
  const navigate = useNavigate();

  const handleGobackToShop = () => {
    navigate('/shop');
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>🫡🫡 Hi I am Inventory 🫡🫡</h1>

      <button
        className='orderNowButton'
        onClick={handleGobackToShop}
      >Go Back To Shop</button>
    </div>
  )
}

export default Inventory
