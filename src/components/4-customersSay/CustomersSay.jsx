import "./customersSay.css";
import React from "react";
const customers = [
  {
    rating: "★★★★☆",
    customerImg: "/icons_assets/1.jpg",

    customerName: "Vini",
    testimonial:
      "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
  },
  {
    rating: "★★★★☆",
    customerImg: "/icons_assets/2.jpg",
    customerName: "Lara",
    testimonial:
      "I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!",
  },
  {
    rating: "★★★☆☆",
    customerImg: "/icons_assets/3.jpg",
    customerName: "Ali",
    testimonial:
      "I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. ",
  },
  {
    rating: "★★★★★",
    customerImg: "../icons_assets/4.jpg",
    customerName: "Anna",
    testimonial:
      "The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends.",
  },
];
export default function CustomersSay() {
  return (
    <div id="testimonials" className="cutomer ">
      <div className="container ">
        <h1>Testimonials</h1>
        <section className="cards flex">
          {customers.map((item) => {
            return (
              <article key={item.customerImg} className="card ">
                <span>{item.rating}</span>
                <div className="info flex">
                  <img src={item.customerImg} alt="img" />
                  <p>{item.customerName}</p>
                </div>
                <p>{item.testimonial}</p>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
