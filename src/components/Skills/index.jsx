import React from "react";
import { skills } from "./skills";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex w-full mt-12 mx-auto px-5 items-center relative">
          <div className="lg:w-7/7 w-full">
            <Swiper
              slidesPerview={1.2}
              spaceBetween={50}
              breakpoints={{
                768: {
                  slidesPerView: 7,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {skills?.map((skill, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <div
                    key={i}
                    className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl flex flex-col items-center justify-center"
                  >
                    <div
                      style={{
                        background: `conic-gradient(rgb(8,145,170) 100%,#ddd 100%)`,
                      }}
                      className="w-32 h-32 flex items-center justify-center rounded-full hover:#fff"
                    >
                      <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                        <skill.logo />
                      </div>
                    </div>
                    <p className="text-xl group-hover:text-cyan-600 mt-3">
                      {skill.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
