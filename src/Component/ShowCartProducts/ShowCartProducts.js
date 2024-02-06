import React from 'react';

function ShowCartProducts(props) {
    const {img, name, price, url, key} = props.product;
    
    return (
        <div className='Products'>
            <div className='ProductImage'>
                <img src={img} alt="product_image"/>
            </div>

            <div className='ProductDetails'>
                <a href={url} target='_main'>{name}</a>
                <h3 className='margin'>${price}</h3>
                <button 
                    className='CartButton'
                    onClick={() => props.handleRemoveButton(key)}
                >Remove</button>
                
            </div>
        </div>
    )
}

export default ShowCartProducts
