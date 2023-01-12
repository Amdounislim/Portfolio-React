import React from "react";
import hero from "../../assets/images/hero2.png";
import Typical from "react-typical";
const Hero = () => {
  const social_media = [
    { logo: "logo-github", link: "https://github.com/Amdounislim" },
    { logo: "logo-facebook", link: "#" },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/slim-amdouni-b90b0115a/",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="w-10/12 md:w-6/12 h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Slim Amdouni</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                1000,
                "MERN Stack  Dev",
                2000,
                "React/Node Dev",
                3000,
              ]}
            />
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon?.link} rel="noreferrer" target="_blank">
                  <ion-icon name={icon.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
