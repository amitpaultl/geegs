import React from "react";
import style from "../Courses/course.module.css";
import EachModule from "./EachModule/EachModule";
import { Link } from "react-router-dom";


const SpecificCourse = () => {
  const modules = [
    { moduleName: "Html", Language: "English" },
    { moduleName: "Html", Language: "English" },
    { moduleName: "Html", Language: "English" },
    { moduleName: "Html", Language: "English" },
  ];
  return (
    <div>
      <div className={`${style.titleCourse} `}>
        <h1>SpecificCourse</h1>
      </div>

      <div className="  m-auto">
        <div className="grid grid-cols-1  gap-7 pt-4 px-5">
          {modules?.map((module, i) => (
            <EachModule key={i} module={module} />
          ))}
        </div>


        <h2 className="upcomming">Upcoming</h2>

        <div className="grid grid-cols-1  gap-7 pt-4 px-5">

          <div className=" timeCurs">
            <div>
              <h3>HTML :  HTML Advanced Tutorial </h3>
              <p>Language : English</p>
            </div>
            <button className="activezoom">Zoom</button>
          </div>
        </div>



      </div>
      <div>
        <Link to="/dashboard/courses/module">go to specific module page</Link>
      </div>
    </div>
  );
};

export default SpecificCourse;
