"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center gap-20 px-20 lgn:px-0">
      <div className="flex flex-col text-center font-bold">
        <span className="text-6xl lgn:text-5xl">Potenciando tu empresa</span>
        <span className="text-6xl text-center text-sky-600 lgn:text-5xl">
          hacia el exito digital
        </span>
      </div>

      <div className="flex flex-col gap-10 mdn:gap-4">
        <motion.div
          className="flex w-full gap-10 mdn:flex-col mdn:gap-4"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg w-fit font-semibold">
                Software personalizado
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                exercitationem non, quos voluptatum, earum consequuntur ratione
                temporibus adipisci at, quo ab! Similique tempora minima, quae
                consectetur magni numquam quos accusamus.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg w-fit font-semibold">
                Software personalizado
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                exercitationem non, quos voluptatum, earum consequuntur ratione
                temporibus adipisci at, quo ab! Similique tempora minima, quae
                consectetur magni numquam quos accusamus.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg w-fit font-semibold">
                Software personalizado
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                exercitationem non, quos voluptatum, earum consequuntur ratione
                temporibus adipisci at, quo ab! Similique tempora minima, quae
                consectetur magni numquam quos accusamus.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex gap-10 px-32 mdn:flex-col xln:px-10 mdn:px-0 mdn:gap-4"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg w-fit font-semibold">
                Software personalizado
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                exercitationem non, quos voluptatum, earum consequuntur ratione
                temporibus adipisci at, quo ab! Similique tempora minima, quae
                consectetur magni numquam quos accusamus.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg w-fit font-semibold">
                Software personalizado
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                exercitationem non, quos voluptatum, earum consequuntur ratione
                temporibus adipisci at, quo ab! Similique tempora minima, quae
                consectetur magni numquam quos accusamus.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <div className="w-full h-full flex border rounded-lg px-9 py-4">
        <div className="w-20 h-20 border rounded-md"></div>
        <div className="flex flex-col">
          <h2 className="text-sky-600 text-xl tracking-tight font-semibold bg-blue-900 rounded-xl px-3">
            Software Personalizado
          </h2>
        </div>
      </div>
      <div className="w-full h-full flex flex-col border rounded-lg px-9 py-4">
        <div className="w-20 h-20 border rounded-md"></div>
        <div></div>
      </div>
      <div className="w-full h-full flex flex-col border rounded-lg px-9 py-4">
        <div className="w-20 h-20 border rounded-md"></div>
        <div></div>
      </div>
      <div className="w-full h-full flex flex-col border rounded-lg px-9 py-4">
        <div className="w-20 h-20 border rounded-md"></div>
        <div></div>
      </div> */}
    </section>
  );
};

export default Skills;
