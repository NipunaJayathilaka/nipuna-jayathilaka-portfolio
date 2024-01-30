import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="education">
      <h1 id="topic">My Education Qualifications</h1>

      <div className="education-card">
        <div className="ins-logo">
          <img
            src="/nipuna-jayathilaka-portfolio/images/education/uom.PNG"
            alt="Logo"
          />
        </div>
        <div className="ins-description">
          <h2>B.Sc.Eng (Hons) in University of Moratuwa </h2>
          <h4>Duration: 2017 - 2022 </h4>
          <h4>
            Graduated from the Department of Earth Resources Engineering at the
            University of Moratuwa, Sri Lanka, with an accomplished academic
            record reflected in an overall GPA of 2.89. Equipped with a solid
            foundation in engineering and a specialized focus on Earth
            resources, my academic journey at the university has prepared me for
            challenges and opportunities in the dynamic field of Earth Resources
            Engineering.
          </h4>
        </div>
      </div>

      <div className="education-card">
        <div className="ins-logo">
          <img
            src="/nipuna-jayathilaka-portfolio/images/education/school2.png"
            alt="Logo"
          />
        </div>
        <div className="ins-description">
          <h2>G.C.E A/L, A/Thamuththegama Central Collage, Anuradhapura </h2>
          <h4>Duration: 2013 - 2016 </h4>
          <h4>
            Successfully completed the GCE Advanced Level (A/L) examination in
            the Physical Science stream in the year 2016, achieving a noteworthy
            accomplishment. Attaining a District Rank of 37 and a commendable
            Z-Score of 1.6056, this academic achievement reflects a strong
            foundation in the Physical Sciences. This accomplishment not only
            demonstrates academic excellence but also signifies a dedication to
            mastering complex subjects within the Physical Science domain during
            the examination year.
          </h4>
        </div>
      </div>

      <div className="education-card">
        <div className="ins-logo">
          <img src="" alt="Logo" />
        </div>
        <div className="ins-description">
          <h2>G.C.E O/L, A/Viddyadipa Maha Viddyalaya, Anuradhapura </h2>
          <h4>Duration: 2002 - 2012 </h4>
          <h4>
            Attained success in the GCE Ordinary Level (O/L) examination in the
            year 2012, marking a significant milestone in my academic journey. I
            have diligently pursued my studies from grade one through grade
            eleven, acquiring a comprehensive education that laid the groundwork
            for my later academic achievements. This foundational period not
            only imparted essential knowledge and skills but also cultivated a
            strong academic discipline and work ethic that continue to guide my
            educational pursuits.
          </h4>
        </div>
      </div>

      <hr />
      <h1 id="topic">Affiliations & Achivements</h1>
      <div className="affiliation">
        <h2>Affiliation</h2>
        <ul>
          <li>Member of Institution of Engineers of Sri Lanka (IESL)</li>
          <li>
            Vice president of Earth Resources Engineering Student Society | 2019
          </li>
          <li>
            Member of Earth Resources Engineering Student Society| 2017, 2018
          </li>
          <li>Member of university Weightlifting Team | 2017 - 2021</li>
          <li>School Head Prefect | 2012</li>
          <li>School prefect | 2011, 2013, 2014</li>
        </ul>
      </div>

      <div className="achivement">
        <h2>Achivements</h2>
        <ul>
          <li>University Colors | 2019</li>
          <li>Inter University 2nd Runners-up in weightlifting | 2018</li>
          <li>Fresher's Volleyball Tournament Runners-up | 2017</li>
          <li>Best Student of the School | 2012</li>
          <li>Successfully covered the Leadership programs</li>
          <ul>
            <li>
              International center for the training of rural leader,
              Ambilipitiya | 2011
            </li>
            <li>
              Leadership program, E3 solution (Pvt) Limited, Ministry of
              Education | 2013
            </li>
            <li>
              Provincial Leadership Youth Camp, Ministry of Transport, Sports &
              Youth Affairs, Co-operative, Trade & Food Industries Development |
              2016
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
