import React from "react";
import style from "../Courses/course.module.css";
import EachModule from "./EachModule/EachModule";
import { Link } from "react-router-dom";


const SpecificCourse = () => {
  const modules = [
    { moduleName: "Html", Language: "English", videourl :"https://vimeo.com/tompeyrat/gaucho" },
    { moduleName: "Html", Language: "English", videourl :"https://vimeo.com/tompeyrat/gaucho" },
    { moduleName: "Html", Language: "English", videourl :"https://vimeo.com/tompeyrat/gaucho" },
    { moduleName: "Html", Language: "English", videourl :"https://vimeo.com/tompeyrat/gaucho" },
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
            <Link target={"_blank"} to={'https://meet.google.com/afk-iedz-jhk?authuser=0'} className="activezoom">Zoom</Link>
          </div>
        </div>



      </div>
    
    </div>
  );
};

export default SpecificCourse;
