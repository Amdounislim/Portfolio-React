import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      emailjs
        .sendForm(
          "service_djzvgkf",
          "template_d7ma9fw",
          form.current,
          "h-jE78SLtaiq09nqP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder="Your Name" name="user_name" />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
            />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
