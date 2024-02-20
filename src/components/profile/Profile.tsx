import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="main">
      <div className="galaxy-background">
        {/* <img
          id="img-one"
          src="/nipuna-jayathilaka-portfolio/images/common/img2.png"
          alt=""
        /> */}
        {/* <img
          id="img-two"
          src="/nipuna-jayathilaka-portfolio/images/common/img2.png"
          alt=""
        />
        <img
          id="img-tree"
          src="/nipuna-jayathilaka-portfolio/images/common/img2.png"
          alt=""
        />
        <img
          id="img-four"
          src="/nipuna-jayathilaka-portfolio/images/common/img2.png"
          alt=""
        />
        <img
          id="star-one"
          src="/nipuna-jayathilaka-portfolio/images/common/star1.png"
          alt=""
        />
        <img
          id="star-two"
          src="/nipuna-jayathilaka-portfolio/images/common/star1.png"
          alt=""
        />
        <img
          id="star-three"
          src="/nipuna-jayathilaka-portfolio/images/common/star2.png"
          alt=""
        />
        <img
          id="star-four"
          src="/nipuna-jayathilaka-portfolio/images/common/star2.png"
          alt=""
        /> */}
        <h1 id="profile-topic">Welcome to Nipuna Jayathilaka's Portfolio!</h1>

        <div className="welcome-note">
          <div className="">
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="double-qutos">"</span>
              Hello and thank you for stopping by! I'm thrilled to have you here
              at my personal portfolio. Whether you're a potential employer,
              colleague, or just someone curious about my work, I'm excited to
              share my journey and projects with you.
              <br />
              <br />
              Feel free to explore the various sections to get to know me better
              and discover the work I'm passionate about. If you have any
              questions, want to collaborate, or just want to say hello, don't
              hesitate to reach out.
              <br />
              <br />I hope you find inspiration and insight into my skills,
              experiences, and the projects that define my professional journey.
              Your visit means a lot to me, and I appreciate your time.
              <br />
              <br />
              Thanks again for dropping by, and enjoy your exploration!
              <span className="double-qutos">"</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="profile-main">
        <div className="profile-description">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;"Hello, I'm Nipuna Jayathilaka, a seasoned
            software engineer deeply passionate about the art of full-stack
            software development. Drawing upon extensive experience in this
            dynamic field, I approach each project with a strategic mindset,
            aspiring not only to deliver solutions but to create outcomes that
            are both innovative and impactful.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;In the ever-evolving landscape of the IT
            industry, I am committed to a culture of continuous learning. My
            adaptability to emerging technologies and trends is the compass that
            keeps me ahead of the curve, ensuring that the solutions I provide
            are not just current but also future-proof. I am devoted to driving
            innovation and consistently striving for excellence in every
            endeavor.
            <br />
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;Let's embark on a journey together,
            where cutting-edge solutions meet a commitment to quality and
            innovation. I'm excited about the possibilities and eager to
            contribute to the success of your projects."
          </h3>
        </div>
        <div className="profile-image">
          <img
            src="/nipuna-jayathilaka-portfolio/images/profilePic.PNG"
            alt="Profile picture"
          />
        </div>
      </div>

      <div className="about-me">
        <div className="about-me-image">
          <img
            src="/nipuna-jayathilaka-portfolio/images/aboutMe.PNG"
            alt="About Me"
          />
        </div>
        <div className="about-me-description">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;"I hold a degree in Engineering from the
            prestigious University of Moratuwa, and I come with hands-on
            experience as a Software Engineer. Throughout my tenure in this
            role, I not only gained valuable skills in software development but
            also honed my knack for creative problem-solving. With an
            impassioned and enthusiastic approach, I thrive on tackling
            challenges head-on, always seeking innovative solutions. I am
            eagerly anticipating new opportunities that will allow me to channel
            my skills and contribute to the dynamic growth and success of an
            organization within the vibrant IT industry."
          </h3>
        </div>
      </div>
    </div>
  );
}
