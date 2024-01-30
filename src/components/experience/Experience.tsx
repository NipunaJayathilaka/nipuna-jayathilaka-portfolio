import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <h1 id="topic">My Working Experiences</h1>
      <div className="experience-card">
        <h2>Trainee Software Engineer</h2>
        <div className="company-details">
          <h4>
            Company Name:{" "}
            <a href="https://iterminaltech.net/" target="_blank">
              iTerminal Technologies
            </a>
          </h4>
          <h4>Duration: 2023 August- 2024 February </h4>
        </div>
        <h4>
          During my intern period, I've immersed myself in both back-end and
          front-end software development, leveraging cutting-edge technologies
          including Java, JavaScript, ReactJS, Spring, Spring Boot, and MySQL.
          My practical experience includes active involvement in developing a
          robust Document Management System, demonstrating expertise in the
          complete software development lifecycle. From architecting powerful
          back-end functionalities to crafting engaging and front-end
          interfaces, I bring a technical prowess that spans the entire software
          development spectrum.
        </h4>
        <h4>
          Tech Stack: ReactJS, TypeScript, Java, SpringBoot, MySQL, Bootstrap,
          React-bootstrap
        </h4>
      </div>

      <div className="experience-card">
        <h2>Trainee Software Engineer</h2>
        <div className="company-details">
          <h4>
            Company Name:{" "}
            <a href="https://www.ijse.lk/" target="_blank">
              Institute of Software Engineering(IJSE)
            </a>
          </h4>
          <h4>Duration: 2023 January - 2023 June </h4>
        </div>
        <h4>
          This comprehensive full-stack development training program is designed
          to empower participants with a strong focus on enhancing both skills
          and attitudes that are in high demand. The hands-on experience covers
          a wide range of technologies and methodologies, ensuring a
          well-rounded and practical understanding of the full-stack development
          landscape. For more information about this program{" "}
          <a
            href="https://www.ijse.lk/direct-entry-program.jsp"
            target="_blank"
          >
            click here
          </a>
          .
          <br />
          <br /> Key Areas of Focus Include: <br />
          <ul>
            <li>Core Java</li>
            <li>Data Structures and Algorithms</li>
            <li>Modern UI Designing</li>
            <li>Database Management</li>
            <li>Application Reporting</li>
            <li>Data Validation:</li>
            <li>File Input and Output</li>
            <li>Version Control</li>
            <li>Client-Side Programming</li>
            <li>Front-End Framework</li>
            <li>Architectural Concepts</li>
            <li>Object-Relational Mapping (ORM)</li>
            <li>Build Automation Tools</li>
            <li>Advanced Java Concepts</li>
            <li>Framework Expertise:</li>
            <li>Testing</li>
          </ul>
          <br />
          This training program ensures a comprehensive and practical
          understanding of full-stack development, providing participants with
          the skills needed to excel in the dynamic world of software
          development.
        </h4>
        <h4>
          Tech Stack: Java, SpringBoot, JavaEE, NodeJS, MySQL, EcmaScript6,
          MongoDB, HTML5, CSS3, Bootstrap, ExpressJS
        </h4>
      </div>
    </div>
  );
}
