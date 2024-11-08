import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import CartItem from './CartItem';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { cart, total_price } = useCartContext();
  const { userid } = useUserContext();
  const navigate = useNavigate(); // Initialize navigate

  const handleConfirmOrder = async () => {
    const orderData = {
      userid,
      cartItems: cart.map((item) => ({
        id: item.id,
        name: item.name,
        amount: item.amount,
        price: item.price,
        category: item.category,
      })),
    };

    try {
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order confirmed successfully");
        // Redirect to Token page after successful order confirmation
        navigate("/Token"); // Use navigate instead of window.location.href
      } else {
        console.error("Failed to confirm order");
      }
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((cur) => (
            <CartItem key={cur.id} {...cur} />
          ))}
        </div>
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Total Price:</p>
              <p>{total_price}</p>
            </div>
            <div className="button-30">
              <button
                style={{
                  width: '100%',
                  color: 'black',
                  backgroundColor: '#ffff00',
                  cursor: 'pointer',
                }}
                onClick={handleConfirmOrder} // Set onClick to trigger order submission and redirection
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Styling code here remains unchanged */
  color: black;
  padding: 3rem 0;
  .container {
    max-width: 1500px;
    margin: auto;
  }
  background: #f9f9f9;
  .cart_heading,
  .cart-item-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }
  .cart_heading {
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 1rem;
  }
  hr {
    margin: 1rem 0;
    border: none;
    border-top: 1px solid #e0e0e0;
  }
  .cart-item {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 0;
  }
  .order-total--amount {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .order-total--subdata {
    display: flex;
    gap: 2rem;
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    width: 300px;
    justify-content: space-between;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .cart_heading,
    .cart-item-row {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }
  }
`;

export default Orders;
