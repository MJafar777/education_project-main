import React from "react";
import "./_contact.scss";
import "../main.scss";

import phone from "../../Assets/images/phone.png";
import message from "../../Assets/images/message.png";
import location from "../../Assets/images/location.png";
function Subscribe() {
  return (
    <div className="contact-us">
      <div className="section-sub">
        <div className="container">
          <div className="section-sub-content">
            <h2 className="section-sub-content__text">
              Subscribe to our newsletter
            </h2>
            <form className="section-sub-content-form">
              <input type="email" className="section-sub-content-form__input" />
              <button
                type="submit"
                className="section-sub-content-form__btn btn-primary"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h2 className="heading-secondary">Contact</h2>
        <div className="contact">
          <form action="" className="send__form">
            <input
              type="text"
              className="send__form--input"
              placeholder="Full name"
            />
            <input
              type="email"
              className="send__form--input"
              placeholder="E mail"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="send__form--area"
              placeholder="Message"
            ></textarea>
            <button className="send__form--btn  btn-primary">Send</button>
          </form>
          <div className="map">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.525686448254!2d69.28454511526243!3d41.340926279268416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCY0L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40Lk!5e0!3m2!1sru!2s!4v1653497562990!5m2!1sru!2s"
                // width="600"
                height="450"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="connection">
              <div className="adress">
                <img src={location} alt="" className="connection-icon" />
                <p className="address">
                  LSE Houghton Street London WC2A 2AE UK.
                </p>
              </div>
              <div className="adress">
                <img src={message} alt="" className="connection-icon" />

                <p className="email-adress">hello@gmail.com</p>
              </div>
              <div className="adress">
                <img src={phone} alt="" className="connection-icon" />

                <p className="phone-number"> +44(20) 74057686</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Subscribe />
    </div>
  );
}

export default Contact;
