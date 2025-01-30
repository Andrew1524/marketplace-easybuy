import React from "react";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  return (
    <div key={item.id} className="item-container">
      <input type="checkbox" checked={item.checked} />
      <div className="item">
        <img src={item.image} alt={item.name} />
        <div className="details">
          <div className="name-and-buttons">
            <h2>{item.name}</h2>
            <div className="buttons">
              <button>Del</button>
              <button>Fav</button>
              <button>Com</button>
            </div>
          </div>
          <div className="price-and-quantity">
            <p className="price">{item.price} $</p>
            <p className="quantity">Quantity: {item.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
