import React from "react";
import './EachModule.css'
import { Link } from "react-router-dom";
const EachModule = ({ module }) => {
  return (
    <Link to={'/dashboard/courses/lecture'} className=" timeCurs">
      <div>
        <h3>HTML :  HTML Advanced Tutorial </h3>
        <p>Language : English</p>
      </div>
      <Link>Join</Link>
    </Link>
  );
};

export default EachModule;
