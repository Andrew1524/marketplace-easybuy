import "./Profile.scss";
import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="control-panel">
        <div className="username-and-pic">
          <img src="https://placehold.co/50" alt="" />
          <span>John Doe</span>
        </div>
        <div className="control-elements">
          <NavLink to="/profile" end className={({ isActive }) => isActive ? "active-link" : ""}>Personal Data</NavLink>
          <NavLink to="/profile/orders" className={({ isActive }) => isActive ? "active-link" : ""}>Orders</NavLink>
          <NavLink to="/profile/cart" className={({ isActive }) => isActive ? "active-link" : ""}>Cart</NavLink>
          <NavLink to="/profile/messages" className={({ isActive }) => isActive ? "active-link" : ""}>Messages</NavLink>
          <NavLink to="/profile/wishlist" className={({ isActive }) => isActive ? "active-link" : ""}>Wishlist</NavLink>
          <NavLink to="/profile/comparison" className={({ isActive }) => isActive ? "active-link" : ""}>Products to compare</NavLink>
          <NavLink to="/profile/payment" className={({ isActive }) => isActive ? "active-link" : ""}>Payment</NavLink>
        </div>
        <div className="additional-control-elements">
          <NavLink to="/profile/settings" className={({ isActive }) => isActive ? "active-link" : ""}>Settings</NavLink>
          <NavLink to="/profile/help" className={({ isActive }) => isActive ? "active-link" : ""}>Help Center</NavLink>
        </div>
      </div>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
