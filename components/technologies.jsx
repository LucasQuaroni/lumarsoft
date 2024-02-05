"use client";

import { stackTechnologies } from "@/lib/techStack";
import React from "react";
import Icon from "./icon";
import { motion } from "framer-motion";
const Technologies = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, //tiempo de espera antes de que comiencen a animarse los hijos
        staggerChildren: 0.2, //tiempo de espera entre cada hijo
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full pb-40 flex items-center flex-col ">
      <h3 className="text-6xl font-semibold text-center mt-16 lgn:text-5xl">
        Tecnologias
      </h3>
      <p className="text-center text-xl mt-4 lgn:text-base">
        Estas son algunas de las tecnologias que utilizamos para desarrollar tus
        proyectos.
      </p>
      <motion.ul
        className="grid grid-cols-6 gap-4 lgn:grid-cols-5 mdn:grid-cols-4 smn:grid-cols-6 mt-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stackTechnologies.map((tech) => (
          <motion.li
            className="list-none"
            initial={{ opacity: 0, y: 30 }}
            variants={itemAnimado}
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
