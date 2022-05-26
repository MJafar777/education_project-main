import React, { useState } from "react";
import "./_header.scss";
import "../main.scss";
import logo from "../../Assets/images/logo.png";
import { Close, Menu } from "@mui/icons-material";
import { Fade } from "react-reveal";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <section className="header">
        <div className="header__nav">
          <div className="header__nav--logo">
            <img src={logo} alt="logo__image" />
            <span className="header__nav--logo--text">EDUCATION</span>
          </div>
          <div className="header__nav--links">
            <ul className="header__nav--links--items">
              <li className="header__nav--links--item">
                <a href="#aa">Home</a>
              </li>
              <li className="header__nav--links--item">
                <a href="#aa">About Us</a>
              </li>
              <li className="header__nav--links--item">
                <a href="#aa">Courses</a>
              </li>
              <li className="header__nav--links--item">
                <a href="#aa">Teachers</a>
              </li>
              <li className="header__nav--links--item">
                <a href="#aa">Programs</a>
              </li>
              <li className="header__nav--links--item">
                <a href="#aa">Conatct</a>
              </li>
            </ul>
          </div>
          {openMenu ? (
            ""
          ) : (
            <div
              className="open__btn"
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <Menu style={{ fontSize: "3rem" }} />
            </div>
          )}
        </div>
        <div className="header__item">
          <h2 className="header__item--title">Knowledge is power</h2>
          <p className="header__item--parag">
            Any succesfull career starts with good education
          </p>
          <a className="header__item--button" href="##">
            Learn more
          </a>
        </div>
      </section>
      {openMenu ? (
        <Fade right>
          <div className="modal">
            <div
              className="close__btn"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Close style={{ fontSize: "3rem" }} />
            </div>
            <div className="modal__links">
              <ul className="modal__links--items">
                <li className="modal__links--item">
                  <a href="#aa">Home</a>
                </li>
                <li className="modal__links--item">
                  <a href="#aa">About Us</a>
                </li>
                <li className="modal__links--item">
                  <a href="#aa">Courses</a>
                </li>
                <li className="modal__links--item">
                  <a href="#aa">Teachers</a>
                </li>
                <li className="modal__links--item">
                  <a href="#aa">Programs</a>
                </li>
                <li className="modal__links--item">
                  <a href="#aa">Conatct</a>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
