// import React from 'react';
import foodOrderingImage from "../../images/5.jpg";
import foodDeliveryImage from "../../images/4.jpg";

const Services = () => {
  return (
    <section id="services-container">
      <h1 className="h-primary center">Our Services</h1>
      <div id="services">
        <div className="box">
          <img src={foodOrderingImage} alt="Food Ordering" />
          <h2 className="h-secondary center">
            <a
              href="menu.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              Food Ordering
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
            a, minus fuga, officiis eveniet eius debitis voluptate mollitia iste
            blanditiis libero cumque exercitationem.
          </p>
        </div>
        <div className="box">
          <img src={foodDeliveryImage} alt="Food Delivery" />
          <h2 className="h-secondary center">
            <a
              href="menu.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              Food Delivery
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
            a, minus fuga, officiis eveniet eius debitis voluptate mollitia iste
            blanditiis libero cumque exercitationem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
