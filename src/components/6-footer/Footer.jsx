import "./footer.css";
import { HashLink } from "react-router-hash-link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container  flex">
        <img src="/icons_assets/Logo.svg" alt="" />
        <div className="nav-footer ">
          <h1>Doormat Naviation</h1>
          <ul>
            <li>
              <HashLink to="/#home">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About Us</HashLink>
            </li>
            <li>
              <HashLink to="/#menu">Menu</HashLink>
            </li>
            <li>
              <HashLink to={"/#testimonials"}>Testimonials</HashLink>
            </li>
            <li>
              <HashLink to={"/booking"}>Reservations</HashLink>
            </li>
          </ul>
        </div>
        <div className="contact ">
          <h1>Contact</h1>
          <p>chicago - AL-Wasl Street</p>
          <p>+98033876759</p>
          <a href="">littleLemon@gmail.com</a>
          <div className="social flex">
            <a href="" className="icon-facebook-square"></a>
            <a href="" className="icon-twitter"></a>
            <a href="" className="icon-instagram"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
