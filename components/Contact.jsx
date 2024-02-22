"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = ({ lenguaje }) => {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_3isglca";
    const templateID = "template_zna8w2m";
    const apikey = "9WDePDRC2s6hN1xRx";

    emailjs
      .sendForm(serviceID, templateID, refForm.current, apikey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section className="text-white body-font" id="contact">
        <div className="py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, offset: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex flex-col text-center mb-12">
              <h2 className="text-5xl font-semibold mb-4 text-sky-500">
                {lenguaje.title}
              </h2>
              <p className="text-base text-[#a5a5a5]">{lenguaje.subtitle}</p>
            </div>
          </motion.div>

          <form
            ref={refForm}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-wrap">
              <div className="p-2 w-1/2">
                <div>
                  <label htmlFor="name" className="text-sm text-white">
                    {lenguaje.form.labelName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black rounded border border-zinc-700 text-base outline-none text-white py-1 px-3 leading-8 focus:border-sky-500 transition-colors duration-200 ease-in-out"
                    placeholder={lenguaje.form.placeholderName}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div>
                  <label htmlFor="email" className="text-sm text-white">
                    {lenguaje.form.labelEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black rounded border border-zinc-700 text-base outline-none text-white py-1 px-3 leading-8 focus:border-sky-500 transition-colors duration-200 ease-in-out"
                    placeholder={lenguaje.form.placeholderEmail}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div>
                  <label htmlFor="message" className="text-sm text-white">
                    {lenguaje.form.labelMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="resize-none w-full bg-black rounded border border-zinc-700 h-32 text-base outline-none text-white px-3 leading-8 focus:border-sky-500 transition-colors duration-200 ease-in-out"
                    placeholder={lenguaje.form.placeholderMessage}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white font-medium bg-sky-500 border-0 py-2 px-20 focus:outline-none hover:bg-sky-600 ease-in-out duration-200 rounded text-lg"
                  type="submit"
                >
                  {lenguaje.form.button}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
