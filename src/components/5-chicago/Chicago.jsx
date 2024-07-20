import "./chicago.css";
import React from "react";

export default function Chicago() {
  return (
    <section id="about" className="chicago ">
      <div className="container flex ">
        <div className="info ">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="photos flex">
          <img
            className="photo-1"
            src="/icons_assets/restaurant chef B.jpg"
            alt=""
          />
          <img
            className="photo-2"
            src="/icons_assets/Mario and Adrian A.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
