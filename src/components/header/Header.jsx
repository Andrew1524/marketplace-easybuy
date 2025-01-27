import "./header.scss";
import logo from "../../resourses/img/logo/logo.svg";
import fingerPrint from "../../resourses/img/icons/fingerprint.svg";
import iconLike from "../../resourses/img/icons/favorite.svg";
import iconCard from "../../resourses/img/icons/shopping.svg";
import AuthModal from "../auth/AuthModal";

import { useState } from "react";

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(true);

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="logotypes" />
          </div>
          <nav className="header__nav">
            <ul className="header__info">
              <li>
                <a href="!#">Catalogue</a>
              </li>
              <li>
                <a href="!#">Sale</a>
              </li>
            </ul>
            <div className="header__search">
              <label className="header__search-field" htmlFor="">
                <input
                  className="header__search-input"
                  type="search"
                  placeholder="Search"
                />
                <button className="header__search-button">Search</button>
              </label>
            </div>
            <div className="header__icons">
              <ul>
                <li>
                  <a href="!#">
                    <img src={iconLike} alt="Favourites" title="Favourites" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <img
                      src={fingerPrint}
                      alt="Saved filters"
                      title="Saved filters"
                    />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <img src={iconCard} alt="Cart" title="Cart" />
                  </a>
                </li>
              </ul>
              <div className="header__sing">
                <button
                  className="header__button-sing"
                  onClick={() => {
                    setShowAuthModal(true);
                    console.log("click");
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <AuthModal isShown={showAuthModal} />
    </header>
  );
};

export default Header;
