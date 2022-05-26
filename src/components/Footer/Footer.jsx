import React from "react";
import "./_footer.scss";
import "../main.scss";

function Footer() {
  return (
    <section className="footer">
      <div className="footer--links">
        <ul className="footer--links--items">
          <li className="footer--links--item">
            <a href="#aa">Home</a>
          </li>
          <li className="footer--links--item">
            <a href="#aa">About Us</a>
          </li>
          <li className="footer--links--item">
            <a href="#aa">Courses</a>
          </li>
          <li className="footer--links--item">
            <a href="#aa">Teachers</a>
          </li>
          <li className="footer--links--item">
            <a href="#aa">Programs</a>
          </li>
          <li className="footer--links--item">
            <a href="#aa">Conatct</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
