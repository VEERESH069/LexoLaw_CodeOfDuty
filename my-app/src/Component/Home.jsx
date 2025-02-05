import React from "react";
import "../Styles/c.css";

const lexo = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/Service">Our services</a>
          <a href="/">About Us</a>
          <a href="/ai">Registration</a>
          <a href="#">Contact us</a>
        </nav>
        <div className="contact-info">
          <span>(780) 429-2300</span>
          <span>lexlot.com</span>
        </div>
      </header>
      <main className="main-banner">
        <h2>PERSONAL INJURY. CRIMINAL DEFENCE. FAMILY LAW.</h2>
        <h1>Advocating For Clients Since 1991</h1>
        <p>
          Chadi & Company is an Edmonton-based, multi-practice law firm, serving
          clients throughout Alberta and Western Canada.
        </p>
        <div className="buttons">
          <button className="consultation-btn">GET A CONSULTATION</button>
        </div>
      </main>
      <footer className="footer">
        <div className="google-review">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztGREBxlF-dRM-QjtCkvj4nSfBqQnHnOj0Q&s"
            width="200px"
            alt="Google Review Badge"
          />
          <span>4.8</span>
          <a href="#reviews">Read our 278 reviews</a>
        </div>
        <div className="google-reviews-cards">
          {["Great service, highly recommended!", "Very professional and knowledgeable team.", "I had a great experience working with them.", "Excellent customer service, will return for sure!", "Top-notch legal expertise, highly satisfied.", "The team really goes above and beyond for their clients."].map((review, index) => (
            <div key={index} className="review-card">
              <img
                src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico"
                alt="Google"
                className="google-icon"
              />
              <p>{review}</p>
              <span>- Reviewer {index + 1}</span>
            </div>
          ))}
        </div>
        <div className="consultation-section">
          <div className="consultation-bg">
            <form className="consultation-form">
              <h3>Get Your Free Consultation</h3>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="statistics">
          <div className="stat">
            <span>190+</span>
            <p>Cases</p>
          </div>
          <div className="stat">
            <span>30,000+</span>
            <p>Hours of Experience</p>
          </div>
          <div className="stat">
            <span>250+</span>
            <p>Successful Cases</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default lexo;
