import React from "react";
import "./Skills.css";
import Skill from "./Skill.tsx";

export default function Skills() {
  let programmingSkills: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/programming/java.png", "Java"],
    [
      "/nipuna-jayathilaka-portfolio/images/programming/JavaScript.png",
      "JavaScript",
    ],
    [
      "/nipuna-jayathilaka-portfolio/images/programming/typeScript.png",
      "TypeScript",
    ],
    ["/nipuna-jayathilaka-portfolio/images/programming/python.png", "Python"],
    ["/nipuna-jayathilaka-portfolio/images/programming/ES6.jpg", "EcmaScript6"],
    ["/nipuna-jayathilaka-portfolio/images/programming/html.png", "HTML5"],
    ["/nipuna-jayathilaka-portfolio/images/programming/css.png", "CSS3"],
  ];

  let framworks: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/framwork/react.png", "React"],
    [
      "/nipuna-jayathilaka-portfolio/images/framwork/springBoot.png",
      "SpringBoot",
    ],
    ["/nipuna-jayathilaka-portfolio/images/framwork/javaSE.png", "JavaSE"],
    ["/nipuna-jayathilaka-portfolio/images/framwork/javaEE.jpg", "JavaEE"],
    [
      "/nipuna-jayathilaka-portfolio/images/framwork/hibernate.jpg",
      "Hibernate",
    ],
    ["/nipuna-jayathilaka-portfolio/images/framwork/nodeJS.png", "NodeJS"],
    [
      "/nipuna-jayathilaka-portfolio/images/framwork/expressJS.png",
      "ExpressJS",
    ],
  ];

  let databases: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/database/mySQL.png", "MySQL"],
    ["/nipuna-jayathilaka-portfolio/images/database/mongoDB.png", "MongoDB"],
  ];

  let vcs: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/vcs/gitHub.png", "GitHub"],
    ["/nipuna-jayathilaka-portfolio/images/vcs/gitLab.jpg", "GittLab"],
    ["/nipuna-jayathilaka-portfolio/images/vcs/bitBucket.png", "BitBucket"],
  ];

  let operatingSystems: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/OS/ubuntu.png", "Ubuntu"],
    ["/nipuna-jayathilaka-portfolio/images/OS/windows.png", "Wondows"],
  ];

  let ides: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/ides/intelliJ.png", "IntelliJ"],
    ["/nipuna-jayathilaka-portfolio/images/ides/VSCode.png", "Vs Code"],
  ];

  let otherTools: string[][] = [
    ["/nipuna-jayathilaka-portfolio/images/otherTools/maven.jpg", "Maven"],
    ["/nipuna-jayathilaka-portfolio/images/otherTools/postman.jpg", "Postman"],
    [
      "/nipuna-jayathilaka-portfolio/images/otherTools/workBench.png",
      "Work Bench",
    ],
    ["/nipuna-jayathilaka-portfolio/images/otherTools/npm.png", "npm"],
    ["/nipuna-jayathilaka-portfolio/images/otherTools/nvm.jpeg", "nvm"],
  ];

  return (
    <div className="skills">
      <h1 id="topic">My Technical Skills</h1>
      <div className="programming-skills">
        <h3 className="highlighter">Programming Skill</h3>
        <div className="skill-card">
          {programmingSkills.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>

      <div className="framwork-skills">
        <h3 className="highlighter">Libraries, Framework & API</h3>
        <div className="skill-card">
          {framworks.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>

      <div className="database-skills">
        <h3 className="highlighter">DataBases</h3>
        <div className="skill-card">
          {databases.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>

      <div className="vcs-skills">
        <h3 className="highlighter">Virsion Control Systems</h3>
        <div className="skill-card">
          {vcs.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>

      <div className="operating-system-skills">
        <h3 className="highlighter">Operating Systems</h3>
        <div className="skill-card">
          {operatingSystems.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>

      <div className="ides-skills">
        <h3 className="highlighter">IDEs</h3>
        <div className="skill-card">
          {ides.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>

      <div className="tools-skills">
        <h3 className="highlighter">Ohter Tools</h3>
        <div className="skill-card">
          {otherTools.map((skill, index) => (
            <div key={index}>
              <Skill src={skill[0]} alt={skill[1]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
