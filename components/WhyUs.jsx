"use client";
import React from "react";
import ReasonCard from "./WhyUsObject";
import { motion } from "framer-motion";
import { SlEnergy } from "react-icons/sl";
import { FaUserCheck } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

const WhyUs = ({ lenguaje }) => {
  const icons = [
    SlEnergy,
    FaUserCheck,
    FcProcess,
    FaHandshakeSimple,
    FaChartLine,
    FaHandHoldingHeart,
  ];

  const styleIcons = [
    "text-3xl text-violet-400 mb-2 mx-auto",
    "text-3xl text-yellow-500 mb-2 mx-auto",
    "text-3xl text-green-500 mb-2 mx-auto",
    "text-3xl text-red-500 mb-2 mx-auto",
    "text-3xl text-orange-500 mb-2 mx-auto",
    "text-3xl text-pink-500 mb-2 mx-auto",
  ];

  return (
    <div className="max-w-5xl mx-auto mb-10 mt-40 text-center pt-14" id="whyUs">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h5 className="text-5xl font-semibold mb-6 smn:text-3xl text-sky-500 bg-gray-800 rounded-lg  inline-block px-4 py-1">
          {lenguaje.title}
        </h5>
        <p className="mb-8 smn:text-sm smn:hidden">{lenguaje.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {lenguaje.reasonCard.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, offset: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ReasonCard
              icon={React.createElement(icons[index])}
              title={card.title}
              description={card.description}
              styleIcon={styleIcons[index]}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyUs;
