import { education } from "./eduction";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="education" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
      <h3 className="text-4xl font-semibold">
          Education & <span className="text-cyan-600">& Certiﬁcations</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {education.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-gray-900 p-10 mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
              border-cyan-600 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="logo-company" className="h-24" />
                <div>
                  <h2 className="md:text-2xl text-xl font-semibold">{content.title}</h2>
                  <br />
                  <p className="sm:text-base text-sm text-cyan-600 font-medium">{content.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Education;