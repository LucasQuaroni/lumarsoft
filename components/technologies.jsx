"use client";

import { stackTechnologies } from "@/lib/techStack";
import React from "react";
import Icon from "./icon";
import { motion } from "framer-motion";

const Technologies = ({ lenguaje }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="w-full pb-10 flex items-center flex-col"
      id="technologies"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="flex justify-center">
          <h3 className="text-5xl font-semibold text-center mt-16 lgn:text-5xl text-sky-500 bg-gray-800 rounded-lg  inline-block px-4 py-1">
            {lenguaje.title}
          </h3>
        </span>
        <p className="text-center text-xl mt-4 lgn:text-base text-gray-400">
          {lenguaje.description}
        </p>
      </motion.div>

      <motion.ul
        className="grid grid-cols-6 gap-4 lgn:grid-cols-5 mdn:grid-cols-4 smn:grid-cols-4 mt-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, offset: 0.4 }}
      >
        {stackTechnologies.map((tech) => (
          <motion.li
            className="list-none"
            initial={{ opacity: 0, y: 30 }}
            variants={itemAnimado}
            key={tech.id}
          >
            <Icon
              name={tech.name}
              image={tech.icon}
              url={tech.url}
              key={tech.id}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Technologies;
