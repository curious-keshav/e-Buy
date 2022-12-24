import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js'

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__add" src="https://media.istockphoto.com/id/491917423/vector/abstract-artistic-colorful-background.jpg?s=612x612&w=0&k=20&c=sET5OKQrpdfw5jejBuFlLfiU_1_9MeljYX37Jcmzz6w="/>
            <div>
              <h3 className='checkout__useremail'>Hello {user?user.email:"Guest"},</h3>
             <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />)
                )}
        </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>

        
    </div>
  )
}

export default Checkout