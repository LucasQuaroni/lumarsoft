"use client"

import React from "react";
import "./nosotros.css";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const Nosotros = ({ lenguaje }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, offset: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-screen h-full flex flex-col items-center justify-center "
      id="nosotros"
    >
      <div className="space-y-2">
        <div className="space-y-2">
          <div className="items-center flex justify-center">
            <div className="inline-block rounded-lg px-7 py-2 text-5xl font-semibold bg-gray-800 text-sky-500 mb-2">
              {lenguaje.title1}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">
              {lenguaje.subtitle}
            </h2>
            <p className="max-w-3xl text-gray-400">{lenguaje.description}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{lenguaje.subtitle2}</h3>
            <ul className="grid gap-2">
              {lenguaje.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <FaCheck className="inline-block h-4 w-4" />
                  <span className="text-sm leading-none">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{lenguaje.subtitle3}</h3>
            <p className="max-w-3xl text-gray-400">{lenguaje.description2}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Nosotros;
