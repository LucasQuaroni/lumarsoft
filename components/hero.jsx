"use client";
import { motion } from "framer-motion";
function Hero({ lenguaje }) {
  return (
    <div className="min-h-screen w-full flex flex-col h-screen">
      <motion.section
        className="w-full h-full flex flex-col items-center justify-center text-center mdn:gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col -translate-y-20 mdn:-translate-y-0">
          <div className="tracking-tighter text-9xl 2xln:text-9xl lgn:text-8xl mdn:text-7xl smn:text-5xl font-semibold">
            <h1>{lenguaje.title1}</h1>
            <h2 className="text-sky-600 font-bold">{lenguaje.title2}</h2>
          </div>
          <span className="text-2xl text-zinc-500 text-center mdn:text-xl smn:text-lg">
            {lenguaje.subtitle}
          </span>
        </div>
        <button className="bg-sky-600 px-5 py-3 font-semibold rounded-md hover:bg-sky-700 transition-all duration-300 -translate-y-10 lgn:-translate-y-0">
          {lenguaje.button}
        </button>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <hr className="w-full h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25 dark:opacity-100" />
      </motion.div>
    </div>
  );
}

export default Hero;
