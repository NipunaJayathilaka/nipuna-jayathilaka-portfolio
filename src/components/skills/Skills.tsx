import React from "react";
import "./Skills.css";
import Skill from "./Skill.tsx";

export default function Skills() {
  let programmingSkills: string[][] = [
    ["/images/programming/java.png", "Java"],
    ["/images/programming/JavaScript.png", "JavaScript"],
    ["/images/programming/typeScript.png", "TypeScript"],
    ["/images/programming/python.png", "Python"],
    ["/images/programming/ES6.jpg", "EcmaScript6"],
    ["/images/programming/html.png", "HTML5"],
    ["/images/programming/css.png", "CSS3"],
  ];

  let framworks: string[][] = [
    ["/images/framwork/react.png", "React"],
    ["/images/framwork/springBoot.png", "SpringBoot"],
    ["/images/framwork/javaSE.png", "JavaSE"],
    ["/images/framwork/javaEE.jpg", "JavaEE"],
    ["/images/framwork/hibernate.jpg", "Hibernate"],
    ["/images/framwork/nodeJS.png", "NodeJS"],
    ["/images/framwork/expressJS.png", "ExpressJS"],
  ];

  let databases: string[][] = [
    ["/images/database/mySQL.png", "MySQL"],
    ["/images/database/mongoDB.png", "MongoDB"],
  ];

  let vcs: string[][] = [
    ["/images/vcs/gitHub.png", "GitHub"],
    ["/images/vcs/gitLab.jpg", "GittLab"],
    ["/images/vcs/bitBucket.png", "BitBucket"],
  ];

  let operatingSystems: string[][] = [
    ["/images/OS/ubuntu.png", "Ubuntu"],
    ["/images/OS/windows.png", "Wondows"],
  ];

  let ides: string[][] = [
    ["/images/ides/intelliJ.png", "IntelliJ"],
    ["/images/ides/VSCode.png", "Vs Code"],
  ];

  let otherTools: string[][] = [
    ["/images/otherTools/maven.jpg", "Maven"],
    ["/images/otherTools/postman.jpg", "Postman"],
    ["/images/otherTools/workBench.png", "Work Bench"],
    ["/images/otherTools/npm.png", "npm"],
    ["/images/otherTools/nvm.jpeg", "nvm"],
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
