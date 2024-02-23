import React from "react";
import "./nosotros.css";
import Carrousel from "./Carrousel";
import Image from "next/image";
import { Lucas, Mateo } from "@/lib/imgProvider";

const Nosotros = ({ lenguaje }) => {
  return (
    <section
      className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-20 pt-10 text-sky-500"
      id="nosotros"
    >
      <h1 className="text-5xl font-bold text-center">{lenguaje.title1}</h1>
      <div className="grid-cols-2 smn:grid-cols-1 md:flex-row md:gap-10 hidden md:grid">
        <div className="image-container mb-10 md:mb-0">
          <Image
            src={Mateo}
            width={380}
            alt="Foto de Mateo Bodini"
            className="rounded-xl"
          />
          <div className="overlay">
            <div className="overlay-content">
              <h5>{lenguaje.persons[0].name}</h5>
              <p>{lenguaje.persons[0].description}</p>
              <a
                href="https://www.linkedin.com/in/mateobodini"
                target="_blank"
              >
                {lenguaje.a}
              </a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image
            src={Lucas}
            width={380}
            alt="Foto de Lucas Quaroni"
            className="rounded-xl"
          />
          <div className="overlay">
            <div className="overlay-content">
              <h5>{lenguaje.persons[1].name}</h5>
              <p>{lenguaje.persons[1].description}</p>
              <a
                href="https://www.linkedin.com/in/lucasquaroni/"
                target="_blank"
              >
                {lenguaje.a}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Carrousel/>
  
    </section>
  );
};

export default Nosotros;
