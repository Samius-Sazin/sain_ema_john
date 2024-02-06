import React from 'react';
import './Cart.css';

function Cart(props) {

  const {cart} = props;
  let shippingAndHandling = 0;
  let tax = 0;
  let itemPrice = 0;

  //for each product just for show
  if(cart.length > 0){
    itemPrice = (cart[cart.length-1]).price;
    tax = itemPrice * 0.1;
    shippingAndHandling = itemPrice * 0.03;
  }

  //calculate total price of products added to carts
  let totalProduct = 0;
  let total = 0;
  let totalTax = 0;
  let totalShippingAndHandling = 0;
  for(let product of cart){
    totalTax = product.price * 0.1;
    totalShippingAndHandling = product.price * 0.03;

    if(!product.quantity){
      product.quantity = 1;
    }
    totalProduct += product.quantity;
    total = (total + totalTax + totalShippingAndHandling + product.price) * product.quantity;
  }

  return (
    <div>
      <div className='orderSummery'>
        <h3>Order Summery</h3>
      </div>
      <h4>Items added : {totalProduct}</h4>
      <p className='margin'>Item Price : ${itemPrice.toFixed(2)}</p>
      <p className='margin'>Shipping & Handling : ${shippingAndHandling.toFixed(2)}</p>
      <p className='margin'>Tax : ${tax.toFixed(2)}</p>
      <p className='orderTotal'>Order Total : ${(total).toFixed(2)}</p>  
      <div style={{textAlign: "center"}}>
        {props.children}
      </div>
    </div>
  )
}

export default Cart
