import React from 'react';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const Token = () => {
  const { cart, total_price } = useCartContext();

  return (
    <div>
      <style>
        {`
          /* Wrapper and container styling */
          .wrapper {
            color: black;
            padding: 3rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          .container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            width: 90%;
            max-width: 800px;
            text-align: center;
          }

          .container h1 {
            margin-bottom: 10px;
            font-size: 50px;
            color: #e62e04;
          }

          .container h1 span {
            color: rgb(255, 242, 0);
          }

          .container h2 {
            margin-bottom: 10px;
            font-size: 30px;
            color: #000000;
          }

          /* Cart item styling */
          .cart-item {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem 0;
          }

          .order-total--amount {
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .order-total--subdata {
            display: flex;
            gap: 2rem;
            padding: 1.5rem;
            border: 1px solid #e0e0e0;
            background-color: #fafafa;
            width: 100%;
            justify-content: space-between;
            font-weight: bold;
          }

          .total-price {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .container {
              padding: 1rem;
            }
            .cart-item {
              gap: 1rem;
            }
            .order-total--subdata {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}
      </style>
        <header>
          <nav className="navbar">
            <div className="logo">
              <h2>Cafe<span>Mingo's</span></h2>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/orders">Orders</Link></li>
            </ul>
          </nav>
        </header>
        <div className="wrapper">
        <div className="container">
          <h1><span>Menu</span> Mingos</h1>
          <h2>Token:</h2>
          
          {/* Display cart items */}
          <div className="cart-item">
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
          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div className="total-price">
                <p>Total Price:</p>
                <p>{total_price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
