import React from "react";
import "./FavouritesButton.scss";
import iconLike from "../../../resourses/img/icons/favorite.svg";

const FavouritesButton = () => {
  return (
    <li>
      <a href="!#">
        <img src={iconLike} alt="Favourites" title="Favourites" />
      </a>
    </li>
  );
};

export default FavouritesButton;
