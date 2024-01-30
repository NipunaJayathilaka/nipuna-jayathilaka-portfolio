import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="">
          <div>Nipuna Jayathilaka</div>
        </div>
        <div className="">
          <div>
            <Link to="/nipuna-jayathilaka-portfolio">Profile</Link>
          </div>
          <div>
            <Link to="/skills">Skills</Link>
          </div>
          <div>
            <Link to="/experience">Experience</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/education">Education</Link>
          </div>
        </div>
        <div className="">
          <div>
            <img
              className="personal-logo"
              src="/nipuna-jayathilaka-portfolio/images/common/img3.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
