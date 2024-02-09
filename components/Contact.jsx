"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <div>
      <section className="text-white body-font relative">
        <div className="py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <span className="text-5xl font-semibold title-font mb-4 text-white">
              Contáctanos
            </span>
            <p className=" mx-auto leading-relaxed text-base text-[#a5a5a5]">
              Tu oportunidad para un cambio radical <b>comienza aquí</b>. <br />{" "}
              Envíanos un mensaje y déjanos llevarte al <b>siguiente nivel.</b>
            </p>
          </div>
          <form
            ref={refForm}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black rounded border border-zinc-700 text-base outline-none text-white py-1 px-3 leading-8 focus:border-sky-500 transition-colors duration-200 ease-in-out"
                    placeholder="Tu nombre aquí"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black rounded border border-zinc-700 text-base outline-none text-white py-1 px-3 leading-8 focus:border-sky-500 transition-colors duration-200 ease-in-out"
                    placeholder="Tu email aquí"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div>
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-black rounded border border-zinc-700 h-32 text-base outline-none text-white px-3 leading-8 focus:border-sky-500 transition-colors duration-200 ease-in-out"
                    placeholder="Cuéntanos un poco sobre tus objetivos y qué esperas lograr con LumarSoft."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white font-medium bg-sky-500 border-0 py-2 px-20 focus:outline-none hover:bg-sky-600 ease-in-out duration-200 rounded text-lg">
                  Button
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
