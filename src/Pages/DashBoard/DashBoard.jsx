import style from "./dashboard.module.css";

import { useEffect, useState } from "react";
import control from "../../assets/dashBoardIcon/control.png";
import logo from "../../assets/dashBoardIcon/logo.png";
import h1 from "../../assets/Testimg/h1.svg";
import h2 from "../../assets/Testimg/h2.svg";
import h3 from "../../assets/Testimg/h3.svg";
import h4 from "../../assets/Testimg/h4.svg";
import h5 from "../../assets/Testimg/h5.svg";
import h6 from "../../assets/Testimg/h12.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
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
          } h-screen p-5  pt-8 md:relative absolute duration-300 z-[1000] `}
      >
        {/* <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
        /> */}
        <div className="flex gap-x-4 items-center ">

          <h1
            className={`text-gray-700 font-poppins origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6 font-poppins">
          {Menus.map((Menu, index) => (
            <li key={index} className="mb-5">
              <Link
                to={Menu?.link}
                className={`flex  rounded-md p-2 cursor-pointer hover:wh text-black text-sm items-center gap-x-4 
              ${"mt-2"} ${currentPath.startsWith(Menu?.link)
                    ? "bg-white shadow-lg dd"
                    : "bg-white "
                  } `}
              >
                <img src={Menu.src} alt="" className=" w-5" />
                <span
                  className={`${!open && "hidden"
                    } origin-left font-bold duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* h-screen  */}
      <div className="grow    relative h-full">
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
