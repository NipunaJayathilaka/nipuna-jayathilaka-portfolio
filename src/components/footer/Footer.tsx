import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-component">
      <div className="section-one">
        <div className="contact-detail">
          <h4>Contact Details</h4>
          <div className="logo-text">
            <img
              src="/nipuna-jayathilaka-portfolio/images/footer/mail.png"
              alt="email"
              className="logo"
            />
            <a href="mailto:nipuna.m.bandara@gmail.com" className="links">
              nipuna.m.bandara@gmail.com
            </a>
          </div>

          <div className="logo-text">
            <img
              src="/nipuna-jayathilaka-portfolio/images/footer/phone.png"
              alt="Phone Number"
              className="logo"
            />
            <a href="tel:+94712349789" className="links">
              +94712349789
            </a>
          </div>
        </div>

        <div className="social-media">
          <h4>Social Media</h4>
          <div className="logo-text">
            <img
              src="/nipuna-jayathilaka-portfolio/images/footer/linkdin.png"
              alt="Linkdin"
              className="logo"
            />
            <a
              href="https://www.linkedin.com/in/nipuna-jayathilaka"
              target="_blank"
              className="links"
            >
              https://www.linkedin.com/in/nipuna-jayathilaka
            </a>
          </div>
          <div className="logo-text">
            <img
              src="/nipuna-jayathilaka-portfolio/images/footer/Facebook.png"
              alt="FaceBook"
              className="logo"
            />
            <a
              href="https://www.facebook.com/nipuna.maduwantha.5"
              target="_blank"
              className="links"
            >
              https://www.facebook.com/nipuna.maduwantha.5
            </a>
          </div>
          <div className="logo-text">
            <img
              src="/nipuna-jayathilaka-portfolio/images/footer/github.png"
              alt="GitHub"
              className="logo"
            />
            <a
              href="https://github.com/NipunaJayathilaka"
              target="_blank"
              className="links"
            >
              https://github.com/NipunaJayathilaka
            </a>
          </div>
          <div className="logo-text">
            <img
              src="/nipuna-jayathilaka-portfolio/images/footer/twitter.png"
              alt="Twitter"
              className="logo"
            />
            <a
              href="https://twitter.com/nipunamadh71151"
              target="_blank"
              className="links"
            >
              https://twitter.com/nipunamadh71151
            </a>
          </div>
        </div>

        <div className="personal-skill">
          <h4>Personal Skills</h4>
          <ul>
            <li>Leadership</li>
            <li>Self-motivated</li>
            <li>Team work</li>
            <li>Time-management</li>
            <li>Adaptability</li>
            <li>Creative</li>
            <li>Confident</li>
          </ul>
        </div>

        <div className="interest">
          <h4>Intersting</h4>
          <ul>
            <li>Fitness</li>
            <li>Trending technologies</li>
            <li>Watching movies</li>
            <li>Traveling</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="section-two">
        <div className="">
          <h2>
            Thank you for visiting my portfolio. Let's create something amazing
            together!
          </h2>
        </div>
        <div className="">
          <h6>
            © Nipuna Jayathilaka 2024. All rights reserved. Designed and
            developed by Nipuna Jayathilaka. © 2024.
          </h6>
        </div>
      </div>
      <hr />
    </div>
  );
}
