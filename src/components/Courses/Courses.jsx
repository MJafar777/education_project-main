import React from "react";
import "./_courses.scss";
import "../main.scss";
import course1 from "../../Assets/images/course1.png";
import course2 from "../../Assets/images/course2.png";
import course3 from "../../Assets/images/course3.png";

const course_database = [
  {
    id: 1,
    active: "active",
    img: `${course1}`,
    name: "Web Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing eli Voluptate, ex totam",
    time: "3 pm",
    teacher: "Ressie Rottman",
  },
  {
    id: 2,
    active: "",
    img: `${course2}`,
    name: "Photography",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing eli Voluptate, ex totam",
    time: "6 pm",
    teacher: "Floyd Fukuda",
  },
  {
    active: "",
    id: 3,
    img: `${course3}`,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing eli Voluptate, ex totam",
    time: "10 am",
    teacher: "Elena Cully",
  },
];

function Courses() {
  return (
    <div className="courses">
      <h1 className="title">Courses</h1>
      <div className="main">
        {course_database.map((val) => {
          return (
            <div className="course" key={val.id}>
              <div className="img">
                <img src={val.img} alt="course img" />
              </div>
              <div className="desc">
                <p className="heading_secondary">{val.name}</p>
                <p className="text">{val.desc}</p>
              </div>
              <div className="about">
                <p className="time">Time: {val.time}</p>
                <hr />
                <p className="time teacher">Teacher: {val.teacher}</p>
                <hr />
                <button className="join">Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
