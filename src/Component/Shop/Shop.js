import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import { Link } from 'react-router-dom';

function Shop() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displaySearchedItem, setDisplaySearchedItem] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setDisplaySearchedItem(data);
      });
  }, [])

  //get value from local storage, Here LS = Local Storage
  useEffect(() => {
    if (products.length) {
      const savedCartData = getStoredCart();
      const LSproducts = [];

      for (const LSkey in savedCartData) {
        const searchedItemFromLS = products.find(product => product.key === LSkey);

        if (searchedItemFromLS) {
          searchedItemFromLS.quantity = savedCartData[LSkey];

          LSproducts.push(searchedItemFromLS);
        }
      }
      setCart(LSproducts);
    }
  }, [products])

  const handleAddCartButton = (product) => {
    const exists = cart.find(prdct => prdct.key === product.key)

    let updateCart = [];
    if (exists) {
      const rest = cart.filter(prdct => prdct.key !== product.key);
      exists.quantity = exists.quantity + 1;
      updateCart = [...rest, product];
    }
    else {
      product.quantity = 1;
      updateCart = [...cart, product];
    }

    setCart(updateCart);

    //save to local storage
    addToDb(product.key);
  }

  //Search box, SB = search Box
  const showSearchedItem = (e) => {
    const searchedItemFromSB = products.filter(product => (product.name).toLowerCase().includes((e.target.value).toLowerCase()));
    setDisplaySearchedItem(searchedItemFromSB);
  }

  return (
    <>
      <div className='InputArea'>
        <input
          onChange={showSearchedItem}
          className='searchBox'
          type='text'
          placeholder='Search here'
        >
        </input>
      </div>

      <div className='ShopContainer'>
        <div className='ProductsContainer'>
          {
            displaySearchedItem.map(product =>
              <Products
                key={product.key}
                product={product}
                handleAddCartButton={handleAddCartButton}
              />)
          }
        </div>

        <div className='CartContainer'>
          <Cart cart={cart}>
            <Link to='/review'>
              <button className='orderNowButton'>Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  )
}

export default Shop