import React from "react";
import iconCard from "../../../resourses/img/icons/shopping.svg";

const CartButton = () => {
  return (
    <li>
      <a href="!#">
        <img src={iconCard} alt="Cart" title="Cart" />
      </a>
    </li>
  );
};

export default CartButton;
