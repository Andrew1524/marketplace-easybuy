import React from "react";
import "./HelpCenter.scss";

const HelpCenter = () => {
  return (
    <>
      <h1>Help Center</h1>
      <p className="help-center__any-questions">
        If you have any questions, you can send us an email or contact us via
        social networks.
      </p>

      <div className="help-center__any-questions-buttons">
        <div className="help-center__button">
          <img src="/call-center.svg" alt="" />
          <p>Call Center</p>
        </div>
        <div className="help-center__button">
          <img src="/telegram.svg" alt="" />
          <p>Telegram Chat</p>
        </div>
        <div className="help-center__button">
          <img src="/whatsapp.svg" alt="" />
          <p>WhatsApp Chat</p>
        </div>
      </div>

      <div className="help-center__contact-us">
        <h2>Contact us</h2>
        <p>Send us a message by email.</p>

        <form className="help-center__contact-us-form">
          <input
            type="text"
            placeholder="Name"
            className="help-center__contact-us-form-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="help-center__contact-us-form-input"
          />
          <textarea
            placeholder="Message"
            className="help-center__contact-us-form-textarea"
          ></textarea>
          <button className="help-center__contact-us-form-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="help-center__faq">
        <h2>FAQ</h2>
      </div>
    </>
  );
};

export default HelpCenter;
