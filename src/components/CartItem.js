import React from 'react'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from "react-icons/fa";

const CartItem = ({id,name,category,price,amount}) => {
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };
    
      const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
      };
  return <div className='cart_heading grid grid-five-column'>
   <div className="cart-image--name">
        <div>
          <figure>
            {name}
          </figure>
    </div>
    <div className="cart-hide">
       <p>{price}</p>
    </div>
    <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
        </div>

        <div className="cart-hide">
            <p>{price*amount}</p>
        </div>

        <div>
            <FaTrash className='remove-icon'/>

        
        </div>

        </div>

 
}

export default CartItem