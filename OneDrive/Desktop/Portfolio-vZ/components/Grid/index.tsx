import Image from "next/image";
import React from "react";
import {  BentoCard, BentoGrid } from "../magicui/bento-grid";
import Ripple from "../magicui/ripple";
import Profile from "../Profile";
import Techstack from "../TechStack";
import Links from "../Links";

const features = [
  {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-3 md:col-end-7 md:row-start-1 md:row-end-3 z-10",
    background: (
      <Profile/>
    ),
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5",
    background: (
      <Techstack/>
    ),
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-3 md:col-end-6 md:row-start-3 md:row-end-4",
    background: (
      <div className="flex h-52 max-sm:flex-col relative justify-end w-full">
        
      </div>
    ),
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-6 md:col-end-7 md:row-start-3 md:row-end-5",
    background: (
      <div className="flex h-52  relative justify-end max-sm:justify-start w-full">
        
      </div>
    ),
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-2",
    background: (
      <Links/>
    ),
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-7 md:col-end-9 md:row-start-2 md:row-end-4",
    background: (
      <div className="flex h-52  relative justify-end max-sm:justify-start w-full">
        
      </div>
    ),
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-3 md:col-end-6 md:row-start-4 md:row-end-5",
    background: (
      <div className="flex h-52 max-sm:flex-col relative justify-end w-full">
        
      </div>
    ),
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    className: "md:col-start-3 md:col-end-9 md:row-start-5 md:row-end-6",
    background: (
      <div className="flex h-52  relative justify-end max-sm:justify-start w-full">
        
      </div>
    ),
  },
];

const Grid = () => {
  return (
    <BentoGrid className="md:grid-cols-8 grid-rows-5 p-5 h-[85vh]">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default Grid;
