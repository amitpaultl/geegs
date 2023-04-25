import React, { useRef, useState } from "react";

import style from "../../MyCourses/Courses/course.module.css";

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import './SpecificLecture.css'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import figma from '../../../../assets/Testimg/figma.svg'

const SpecificLecture = () => {


  const videoData = [
    {
      singleData: [
        { title: 'Using The Paint Brush sing The Paint Brush' },
        { title: 'Paint Using The Paint ' },
        { title: ' Brush sing The Paint Brush' },
      ]
    },
  ]

  return (
    <div>


      <div className="grid grid-cols-4  gap-7 pt-4 px-5">
        <div className="hello col-span-3">

          <ReactPlayer
            url='https://vimeo.com/tompeyrat/gaucho'
            className='react-player'
            playing
            width= "100%"
            height='360px'
            controls

          />

          <div className={`${style.textVideo} `}>
            <h2 >Figma UI Design Tutorial: Get Started in Just 24 Minutes!</h2>

            <p>Do you want to learn Figma but don’t know where to start? Well, if you follow this step-by-step tutorial, it will only take you 24 minutes to learn all the basics you need to know to start designing apps and websites in Figma.</p>

            <div className="figma">
              <img src={figma} alt="" />
              <span>Design Master</span>
            </div>

            <Tabs className='videtab'>
              <TabList>
                <Tab>Notes</Tab>
                <Tab>Assignment</Tab>
              </TabList>

              <TabPanel>
                <p>Do you want to learn Figma but don’t know where to start? Well, if you follow this step-by-step tutorial, it will only take you 24 minutes to learn all the basics you need to know to start designing apps and websites in Figma.  In this Figma tutorial for beginners, UX designer Amr guides you through Figma’s interface and tools following a very valuable principle to start mastering this tool. “If you want to learn the basics, you should copy other designs”.  Do you have more questions about Figma or the next steps you should take? Leave them in the comments below ⬇️  ✅ If you want to learn about facilitation and workshopping join our FREE FACILITATION COMMUNITY where hundreds of workshop facilitators gather to share their resources, insights and experiences 👉 </p>

                <h3>Discussion</h3>

                <form >
                  <input type="text" />
                </form>

              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>


          </div>
        </div>
        <div className="videoUrl">
          <h3>Course content</h3>

          <div className="sectionVideo">
            <h4>Section 2</h4>
            <Link>1 Using The Paint Brush sing The Paint Brush</Link>
          </div>
          <div className="sectionVideo">
            <h4>Section 3</h4>
            <Link>1 Using The Paint Brush sing The Paint Brush</Link>
          </div>
          <div className="sectionVideo">
            <h4>Section 4</h4>
            <Link>1 Using The Paint Brush sing The Paint Brush</Link>
          </div>
        </div>

      </div>








    </div>
  );
};

export default SpecificLecture;
