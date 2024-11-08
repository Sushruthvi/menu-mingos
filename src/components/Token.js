import React from 'react';
import { useCartContext } from '../context/cart_context';

const Token = () => {
  const { cart, total_price } = useCartContext();

  return (
    <div>
      <h2>Token:</h2>
      
      {/* Display cart items */}
      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item._id} style={{ marginBottom: '1rem' }}>
              <h4>{item.name}</h4>
              <p>Token ID: {item._id}</p> {/* Display the ObjectId */}
              <p>Quantity: {item.amount}</p>
              <p>Price: {item.price}</p>
              <p>Category: {item.category}</p>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      
      {/* Display total price */}
      <div>
        <h3>Total Amount: {total_price}</h3>
      </div>
    </div>
  );
};

export default Token;
