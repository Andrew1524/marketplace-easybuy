import ProfileButton from "./profile/ProfileButton";
import SearchBar from "./search-bar/SearchBar";
import Logo from "./logo/Logo";
import FavouritesButton from "./favs/FavouritesButton";
import CartButton from "./cart/CartButton";
import FiltersButton from "./filters/FiltersButton";

import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Logo />
          <nav className="header__nav">
            <ul className="header__info">
              <li>
                <NavLink to="/catalogue">Catalogue</NavLink>
              </li>
              <li>
                <NavLink to="/sale">Sale</NavLink>
              </li>
            </ul>
            <SearchBar />
            <div className="header__icons">
              <ul>
                <FavouritesButton />
                <FiltersButton />
                <CartButton />
              </ul>
              {/* а шо если передвинуть ProfileButton внутрь списка ul? */}
              <ProfileButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
