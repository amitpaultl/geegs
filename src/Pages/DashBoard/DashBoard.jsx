import style from "./dashboard.module.css";

import { useEffect, useState } from "react";
import control from "../../assets/dashBoardIcon/control.png";
import logo from "../../assets/dashBoardIcon/logo.png";
import { RiHome5Line } from "react-icons/ri";
import h1 from "../../assets/Testimg/h1.svg";
import h2 from "../../assets/Testimg/h2.svg";
import h3 from "../../assets/Testimg/h3.svg";
import h4 from "../../assets/Testimg/h4.svg";
import h5 from "../../assets/Testimg/h5.svg";
import h6 from "../../assets/Testimg/h12.svg";
import g1 from "../../assets/Testimg/g1.svg";
import g2 from "../../assets/Testimg/g2.svg";
import g3 from "../../assets/Testimg/g3.svg";
import g4 from "../../assets/Testimg/g4.svg";
import g5 from "../../assets/Testimg/g5.svg";
import g6 from "../../assets/Testimg/g6.svg";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
const DashBoard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: h1, link: "/" },
    { title: "Test", src: h2, link: "/dashboard/assessment" },
    { title: "Analysis", src: h3, link: "/dashboard/analysis" },
    { title: "Practice", src: h4, link: "/dashboard/practice" },
    { title: "Courses", src: h5, link: "/dashboard/courses" },
    {
      title: "Admin",
      src: h6,
      link: "/dashboard/admin-pannel",
    },
  ];
  const [currentPath, setCurrrentPath] = useState("");
  const [shouldHiddenNav, setShouldHiddenNav] = useState(false);

  useLocation();
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrrentPath(window.location.pathname);
    };
    return handleLocationChange();
  });

  useEffect(() => {
    // console.log("currentPath: ", currentPath);
    if (currentPath.startsWith("/dashboard/assessment/on-processing")) {
      setShouldHiddenNav(true);
    } else {
      setShouldHiddenNav(false);
    }
  }, [currentPath]);

  return (
    <div className="flex  gap-4 w-full ">
      <div
        style={{
          display: `${shouldHiddenNav ? "none" : "block"}`,
          minWidth: `${open ? "200px" : "80px"}`,
          maxWidth: `${open ? "200px" : "80px"}`,
        }}
        className={`${!open && "hidden"} md:block  ${open && " bg-white rounded-md"
          } ${style.dashboardHeight
          } ${style.menubox} p-5  menubox pt-8 md:relative absolute duration-300 z-[1000] `}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <div className="flex gap-x-4 items-center ">

          <h1
            className={`text-gray-700 font-poppins origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className={`pt-6 font-poppins menuSub ${style.menuSub}`}>
          

            <li  className="mb-5">
              <NavLink to={'/'}>
              <img className="show" src={g1} alt="" />
                <img  className="hide" src={h1} alt="" />Home
              </NavLink>
            </li>
            <li  className="mb-5">
              <NavLink to={'/dashboard/courses'}>
              <img className="show" src={g2} alt="" />

                <img src={h2}  className="hide" alt="" /> Courses
              </NavLink>
            </li>
            <li  className="mb-5">
              <NavLink to={'/dashboard/assessment'}>
              <img className="show" src={g3} alt="" />

                <img src={h3}  className="hide" alt="" /> Test
              </NavLink>
            </li>
            <li  className="mb-5">
              <NavLink to={'/dashboard/analysis'}>
              <img className="show" src={g4} alt="" />

                <img  className="hide" src={h4} alt="" /> Analysis 
              </NavLink>
            </li>
            <li  className="mb-5">
              <NavLink to={'/dashboard/practice'}>
              <img className="show" src={g5} alt="" />

                <img  className="hide" src={h5} alt="" /> Practice
              </NavLink>
            </li>
            <li  className="mb-5">
              <NavLink to={'/dashboard/admin-pannel'}>
              <img className="show" src={g6} alt="" />

                <img  className="hide" src={h6} alt="" /> Admin
              </NavLink>
            </li>
        </ul>
      </div>
      {/* h-screen  */}
      <div className="grow    relative ">
        <div style={{ display: `${shouldHiddenNav ? "none" : "block"}` }}>

        </div>
        <div
          className={` ${style.dashboardHeight}  rounded-md overflow-y-auto `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
