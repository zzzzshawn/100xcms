import { backEnd, currentlyLearning, frontEnd, services } from "@/constants";
import React from "react";

const Techstack = () => {
  return (
    <div className="flex flex-col h-full px-1 overflow-hidden justify-start relative w-full group">
      <div className="">
        <p className="text-5xl pt-5 px-2.5 font-bold">
          {" "}
          {"{ "}
          {" }"}
        </p>
        <h1 className="text-5xl font-bold py-2 px-2.5 relative w-full ">
          TECH <br /> STACK
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-white rounded-full transition-all duration-500 group-hover:w-[80%] group-hover:mx-auto "></span>
        </h1>{" "}
      </div>
      <div className="w-full grid grid-cols-1 text-zinc-200/80 overflow-y-auto p-2 gap-5">
        <div className="  flex flex-col transition-all duration-500 rounded-lg gap-1  p-1  text-md">
          <p className="text-white">Frontend:</p>
          <div className=" flex flex-wrap gap-1.5">
            {frontEnd.map((item) => (
              <div
                key={item}
                className=" px-2 text-sm border border-zinc-800 line-clamp-1 overflow-hidden w-max rounded-sm size-max hover:border-white/50 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col transition-all duration-500 rounded-lg gap-1  p-1 text-md">
          <p className="text-white">Backend:</p>
          <div className=" flex flex-wrap gap-1.5">
            {backEnd.map((item) => (
              <div
                key={item}
                className=" px-2 text-sm border border-zinc-800 line-clamp-1 overflow-hidden w-max rounded-sm size-max hover:border-white/50 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col transition-all duration-500 rounded-lg gap-1  p-1 text-md">
          <p className="text-white">Db & Services:</p>
          <div className=" flex flex-wrap gap-1.5">
            {services.map((item) => (
              <div
                key={item}
                className=" px-2 text-sm border border-zinc-800 line-clamp-1 overflow-hidden w-max rounded-sm size-max hover:border-white/50 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col transition-all duration-500 rounded-lg gap-1  p-1 text-md">
          <p className="text-white">Currently learning:</p>
          <div className=" flex flex-wrap gap-1.5">
            {currentlyLearning.map((item) => (
              <div
                key={item}
                className=" px-2 text-sm border border-zinc-800 line-clamp-1 overflow-hidden w-max rounded-sm size-max hover:border-white/50 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
