import { stackTechnologies } from "@/lib/techStack";
import React from "react";
import Icon from "./icon";

const Technologies = () => {
  return (
    <section className="w-full pb-40 flex items-center flex-col ">
      <h3 className="text-6xl font-semibold text-center mt-16">Tecnologias</h3>
      <p className="text-center text-xl mt-4">
        Estas son algunas de las tecnologias que utilizamos para desarrollar tus
        proyectos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg xs:mx-3 mt-6">
        {stackTechnologies.map((tech) => (
          <Icon name={tech.name} image={tech.icon} key={tech.id} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
