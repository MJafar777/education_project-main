import React from "react";
import "./_teachers.scss";
import "../main.scss";

import teacher1 from "../../Assets/images/Teacher1.png";
import teacher2 from "../../Assets/images/Teacher2.png";
import teacher3 from "../../Assets/images/Teacher3.png";
import teacher4 from "../../Assets/images/Teacher4.png";
import teacher5 from "../../Assets/images/Teacher5.png";
import teacher6 from "../../Assets/images/Teacher6.png";
import teacher7 from "../../Assets/images/Teacher7.png";
import teacher8 from "../../Assets/images/Teacher8.png";
import teacher9 from "../../Assets/images/Teacher9.png";

const teacher_DataBase = [
  {
    id: 1,
    img: `${teacher1}`,
    name: "Velvet Vachon",
    status: "Design Head",
  },
  {
    id: 2,
    img: `${teacher2}`,
    name: "Arlene Anello",
    status: "SEO Head",
  },
  {
    id: 3,
    img: `${teacher3}`,
    name: "Benton Colley",
    status: "Photography Head",
  },
  {
    id: 4,
    img: `${teacher4}`,
    name: "Floyd Fukuda",
    status: "Marketing HOD",
  },
  {
    id: 5,
    img: `${teacher5}`,
    name: "Elena Cully",
    status: "Design Head",
  },
  {
    id: 6,
    img: `${teacher6}`,
    name: "Burton Brooke",
    status: "Web Technologist",
  },
  {
    id: 7,
    img: `${teacher7}`,
    name: "Ressie Rottman",
    status: "Design Head",
  },
  {
    id: 8,
    img: `${teacher8}`,
    name: "Reed Recio",
    status: "Photography Head",
  },
  {
    id: 9,
    img: `${teacher9}`,
    name: "Nancee Bluford",
    status: "SEO Head",
  },
];

function Teachers() {
  return (
    <>
      <div className="teachers">
        <h1 className="teachers__title">Our Teachers</h1>
        <div className="teachers__main">
          {teacher_DataBase.map((val) => {
            return (
              <div className="teacherTitle" key={val.id}>
                <div className="teacherTitle__imgTeacher">
                  <img
                    className="teacherTitle__imgTeacher--img"
                    src={val.img}
                    alt="#"
                  />
                </div>
                <div className="teacherTitle__teacher">
                  <p className="teacherTitle__teacher--name">{val.name}</p>
                  <p className="teacherTitle__teacher--status">{val.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Teachers;
