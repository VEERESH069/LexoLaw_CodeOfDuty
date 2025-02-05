import React from "react";
import "../Styles/Service.css";



const OurServices = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/our-services">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <section className="main-banner">
        <h1>Our Services</h1>
        <p>We offer the best services to cater to your needs</p>
      </section>
      <section className="services-section">
        <div className="service-card card1">
          <h3>       
          </h3>
        </div>
        <div className="service-card card2">
          <h3>
            <a href="/documentation">Documentation</a>
          </h3>
        </div>
        <div className="service-card card3">
          <h3>
            <a href="/comrade">Comrade</a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default OurServices;
