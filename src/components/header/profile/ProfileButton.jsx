import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../../auth/AuthModal";
import { AuthContext } from '../../../contexts/AuthContext';

const ProfileButton = () => {
  const { isAuth } = useContext(AuthContext);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const renderProfileButton = () => (
    <div className="header-profile-button">
      <Link to="/profile">
        <img
          src="https://placehold.co/50"
          alt="Profile"
          className="header-profile-button-image"
        />
        Profile
      </Link>
    </div>
  );

  const renderSignUpButton = () => (
    <div className="header__sing">
      <button
        className="header__button-sing"
        onClick={() => setShowAuthModal(true)}
      >
        Sign Up
      </button>
      {/* Переносим модальное окно за пределы контейнера кнопки */}
      {showAuthModal && (
        <AuthModal
          isShown={showAuthModal}
          setShowAuthModal={setShowAuthModal}
        />
      )}
    </div>
  );

  return isAuth() ? renderProfileButton() : renderSignUpButton();
};

export default ProfileButton;
