import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 px-20">
      <div className="flex flex-col text-center">
        <span className="text-6xl">Potenciando tu empresa</span>
        <span className="text-6xl text-center font-semibold text-sky-600">
          hacia el exito digital
        </span>
      </div>

      <div className="flex w-full gap-10">
        <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
          <Image width={50} height={80} />
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
          <Image width={50} height={80} />
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
          <Image width={50} height={80} />
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
