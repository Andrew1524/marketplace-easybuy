import React from "react";
import "./Cart.scss";
import CartItem from "./cart-item/CartItem";

const Cart = () => {
  const items = [
    {
      image: "https://placehold.co/150",
      checked: false,
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 2,
    },
    {
      image: "https://placehold.co/150",
      checked: true,
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 1,
    },
  ];

  return (
    <>
      <h1>Cart</h1>
      <div className="cart-content bg-white d-flex justify-content-around w-80 my-3 rounded-3">
        <div className="items w-100 me-3 p-3 shadow rounded-3">
          <div className="all-items-checkbox">
            <input type="checkbox" name="all" id="all" />
            <label htmlFor="all">All items</label>
          </div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="summary bg-white p-3 shadow br-12 rounded-3">
          <h1>Summary</h1>
          <p>Total Items: {items.length}</p>
          <p>Total Price: {items.reduce((acc, item) => acc + item.price, 0)}</p>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
