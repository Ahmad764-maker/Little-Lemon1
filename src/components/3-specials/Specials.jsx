import "./specials.css";
import React from "react";

export default function Specials() {
  return (
    <section id="menu" className="specials flex ">
      <div className="container ">
        <div className="top flex">
          <h1>This weeks specials!</h1>
        </div>
        <div className="flex cards">
          <div className="card">
            <img src="/icons_assets/greek salad.jpg" alt="" />
            <div className="tittle-card flex">
              <h1>Greek Salad</h1>
              <span>$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="footer-card flex">
              <h2>Come and taste..</h2>
            </div>
          </div>
          <div className="card">
            <img src="/icons_assets/bruchetta.svg" alt="" />
            <div className="tittle-card flex">
              <h1>Bruchetta</h1>
              <span>$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div className="footer-card flex">
              <h2>Come and taste..</h2>
            </div>
          </div>

          <div className="card">
            <img src="/icons_assets/lemon dessert.jpg" alt="" />
            <div className="tittle-card flex">
              <h1>Lemon Dessert</h1>
              <span>$5.00</span>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <div className="footer-card flex">
              <h2>Come and taste..</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
