import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        //remove item from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image"src={image}/>
        <div className='checkoutProduct__info'>
             <p className='checkoutProduct__title'>{title}</p>
             <div className='checkoutProduct__rating'>
              {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
              ))}
            </div>
            <button onClick={removeFromBasket} className="checkoutproduct__remove__btn">Remove item</button>
        </div>
        <p className='checkoutProduct__price'><small>$</small><strong>{price}</strong></p>

    
    </div>
  )
}

export default CheckoutProduct