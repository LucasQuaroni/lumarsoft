import { stackTechnologies } from "@/lib/techStack";
import React from "react";
import Icon from "./icon";

const Technologies = () => {
  return (
    <section className="w-full pb-40 flex items-center flex-col ">
      <h3 className="text-6xl font-semibold text-center mt-16 lgn:text-5xl">
        Tecnologias
      </h3>
      <p className="text-center text-xl mt-4 lgn:text-base">
        Estas son algunas de las tecnologias que utilizamos para desarrollar tus
        proyectos.
      </p>
      <div className="grid grid-cols-6 gap-4 lgn:grid-cols-5 mdn:grid-cols-4 smn:grid-cols-2 mt-6">
        {stackTechnologies.map((tech) => (
          <Icon
            name={tech.name}
            image={tech.icon}
            url={tech.url}
            key={tech.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
