import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ProfileButton from "./profile/ProfileButton";
import SearchBar from "./search-bar/SearchBar";
import Logo from "./logo/Logo";
import FavouritesButton from "./favs/FavouritesButton";
import CartButton from "./cart/CartButton";
import FiltersButton from "./filters/FiltersButton";

import "./header.scss";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="header d-flex justify-content-between align-items-center"
    >
      <Container fluid className="px-4">
        <Navbar.Brand className="me-4">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="p-3 align-items-center w-100">
            {/* первые две кнопки */}
            <NavLink to="/catalogue" className={({ isActive }) => isActive ? "nav-link text-white px-3 active-link" : "nav-link text-white px-3"}>
              Catalogue
            </NavLink>
            <NavLink to="/sale" className={({ isActive }) => isActive ? "nav-link text-white px-3 active-link" : "nav-link text-white px-3"}>
              Sale
            </NavLink>
            {/* <SearchBar /> */}
            <Form
              className="d-flex mx-4 flex-grow-1"
              style={{ maxWidth: "600px" }}
            >
              <Form.Control
                type="search"
                placeholder="Search for anything"
                className="rounded-start rounded-0 border-0"
                aria-label="Search"
              />
              <Button
                variant="danger"
                className="rounded-0 rounded-end "
                style={{ backgroundColor: "#e91e63" }}
              >
                Search
              </Button>
            </Form>
            {/* кнопки справа */}
            <Nav className="ms-auto align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <FavouritesButton className="btn text-white p-2" />
                <FiltersButton className="btn text-white p-2" />
                <CartButton className="btn text-white p-2" />
                <ProfileButton className="btn p-0 ms-2" />
              </div>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;