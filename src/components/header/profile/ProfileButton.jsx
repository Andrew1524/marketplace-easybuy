import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../../auth/AuthModal'; 

const ProfileButton = ({ authenticated }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSignUpClick = () => {
    setShowAuthModal(true);
    console.log("Sign Up button clicked");
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };

  const renderProfileButton = () => (
    <div className="header-profile-button">
      <Link to="/profile">
        <img src="https://placehold.co/50" alt="Profile" className="header-profile-button-image" />
        {/* user name */}
        Profile
      </Link>
    </div>
  );

  const renderSignUpButton = () => (
    <div className="header__sing">
      <button className="header__button-sing" onClick={handleSignUpClick}>
        Sign Up
      </button>
      {showAuthModal && <AuthModal isShown={showAuthModal} toggleIsShown={handleCloseModal} />}
    </div>
  );

  return authenticated ? renderProfileButton() : renderSignUpButton();
};

export default ProfileButton;