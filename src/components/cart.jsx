import React, { useContext } from "react";
import { CartContext } from "../cartcontext";
import Nav from "./nav";
import Footer from "./footer";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  function goToProduct(item) {
    // route depending on source
    if (item.source === "top") navigate(`/topdetails/${item.id}`);
    else if (item.source === "catalog") navigate(`/details/${item.id}`);
    else {
      // best-effort: try both
      navigate(`/topdetails/${item.id}`);
    }
  }

  return (
    <div>
      <Nav />
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-message">Your cart is currently empty.</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.img} alt={item.name} style={{cursor:'pointer'}} onClick={() => goToProduct(item)} />
                <div className="cart-details">
                  <h4 style={{cursor:'pointer', textDecoration:'underline'}} onClick={() => goToProduct(item)}>{item.name}</h4>
                  <p className="cart-price">{item.price}</p>
                  <div className="cart-qty">Qty: {item.qty || 1}</div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
