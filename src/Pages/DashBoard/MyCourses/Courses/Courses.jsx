import React from "react";
import { Link } from "react-router-dom";
import courseimg from "../../../../assets/imga/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg";
import style from "./course.module.css";

const Courses = () => {
  return (
    <div>
      <h1>all courses should be here here</h1>
      <div>
        <div className={`${style.contain}`}>
          {/* we hav to use each courses  */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3  gap-5 pt-4 px-5">
            <div className= {`${style.singleCourse}`}>
              <img src={courseimg} alt="" />
              <h2>Css</h2>
              <Link to={''}>Start Learn</Link>
            </div>
            <div className={`${style.singleCourse}`}>
              <img src={courseimg} alt="" />
              <h2>Css</h2>
              <Link to={''}>Start Learn</Link>
            </div>
            <div className={`${style.singleCourse}`}>
              <img src={courseimg} alt="" />
              <h2>Css</h2>
              <Link to={''}>Start Learn</Link>
            </div>
            <div className={`${style.singleCourse}`}>
              <img src={courseimg} alt="" />
              <h2>Css</h2>
              <Link to={''}>Start Learn</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/dashboard/courses/course">go to specific course page</Link>
      </div>
    </div>
  );
};

export default Courses;
