import React from "react";
import { content } from "./content";
const Works = () => {
  return (
    <section id="experience" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Work History</p>
      </div>
      <div className="flex items-center justify-center mt-12 mx-16 gap-10 flex-wrap">
        {content.map((work, i) => (
          <div
            key={i}
            className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-xl mx-auto min-h-[24rem] md:mt-24 flex gap-6 text-center flex-col items-center justify-center flex-1 cursor-pointer"
          >
            <img
              src={work.logo}
              alt={`logo-${work.logo}`}
              className="mx-auto w-16 md:w-28 h-16 md:h-28"
            />
            <h2 className="md:text-2xl text-xl font-semibold">{work.title}</h2>
            <p className="lg:text-center md:text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
              {work.description}
            </p>
            <span className="text-cyan-600 font-medium">{work.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
