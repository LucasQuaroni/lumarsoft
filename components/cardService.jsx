"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const CardService = ({ contenido }) => {
  return (
    <motion.article
      className="flex flex-col gap-4 w-full border border-zinc-800 px-4 py-4 rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, offset: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center font-semibold text-lg">
        {contenido.title}
      </span>
      <p>{contenido.description}</p>
      <AnimatePresence>{<TimeLine contenido={contenido} />}</AnimatePresence>
    </motion.article>
  );
};

export default CardService;

const TimeLine = ({ contenido }) => {
  return (
    <div className="relative  border-s border-sky-400">
      <ol>
        <motion.li
          className="mb-10 ms-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            Paso 1
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {contenido.paso1}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {contenido.descripcionPaso1}
          </p>
        </motion.li>
        <motion.li
          className="mb-10 ms-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5  bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Paso 2
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {contenido.paso2}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {contenido.descripcionPaso2}
          </p>
        </motion.li>
        <motion.li
          className="ms-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Paso 3
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {contenido.paso3}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {contenido.descripcionPaso3}
          </p>
        </motion.li>
        <motion.li
          className="ms-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Paso 4
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {contenido.paso4}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {contenido.descripcionPaso4}
          </p>
        </motion.li>
      </ol>
    </div>
  );
};
