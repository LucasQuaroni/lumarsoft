"use client";
import React from "react";
import Image from "next/image";
import MarvoAI from "../public/Icons/MarvoAI.jpeg";
import mateoFoto from "../public/Icons/mateoFoto.jpeg";
import LucasAI from "../public/Icons/LucasAI.jpeg";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <section
      className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-20 2xln:pt-20 pt-10"
      id="nosotros"
    >
      <h1 className="text-5xl font-bold">Nosotros</h1>
      <div className="flex gap-10">
        <div className="image-container">
          <Image
            src={MarvoAI}
            // src={mateoFoto}
            width={380}
            alt="Foto persona"
            className="rounded-xl"
          />
          <div className="overlay">
            <div className="overlay-content">
              <p>
                Mateo Bodini actual CEO de LumarSoft, experiencia en desarrollo
                de software y gestion de proyectos.
              </p>
              <a
                href="https://www.linkedin.com/in/mateo-bodini-46aa8828a/"
                target="_blank"
              >
                Visitar LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image
            src={LucasAI}
            width={380}
            alt="Foto persona"
            className="rounded-xl"
          />
          <div className="overlay">
            <div className="overlay-content">
              <p>
                Lucas Quaroni actual CTO de LumarSoft, experiencia como
                desarrollador fullstack .
              </p>
              <a
                href="https://www.linkedin.com/in/lucasquaroni/"
                target="_blank"
              >
                Visitar LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
