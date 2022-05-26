import React from "react";
import "./_education.scss";
import "../main.scss";
import education from "./../../Assets/images/education.png";
import education2 from "./../../Assets/images/education-2.png";
import education3 from "./../../Assets/images/education-3.png";
import education4 from "./../../Assets/images/education-4.png";

function Education() {
  return (
    <>
      <div className="education">
        <div className="education__left">
          <img src={education} alt="Education img" className = "education__left--img"/>
        </div>
        <div className="education__right">
          <h2 className="education__right--heading">Education</h2>
          <p className="education__right--loremText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            distinctio quo ad assumenda laborum rem nihil exercitationem quia.
            Odit ratione doloribus repudiandae corporis enim fugiat a iste,
            sequi odio libero.
          </p>
          <div className="education__right--item">
            <img
              src={education2}
              alt="Education2"
              className="education__right--item--img"
            />
            <h3 className="education__right--item--text">Learn anything</h3>
          </div>
          <div className="education__right--item">
            <img
              src={education3}
              alt="Education2"
              className="education__right--item--img"
            />
            <h3 className="education__right--item--text">
              Talk to owr instructors
            </h3>
          </div>
          <div className="education__right--item">
            <img
              src={education4}
              alt="Education2"
              className="education__right--item--img"
            />
            <h3 className="education__right--item--text">Speak with others</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
