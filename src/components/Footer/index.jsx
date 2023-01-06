import React from "react";

const Footer = () => {
    const contact_info = [
        { logo: "mail", text: "amdouni.slim@gmail.com" },
        { logo: "logo-whatsapp", text: "+216 56 641 185" },
        { logo: "location", text: "Manouba" }
      ];
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Footer;