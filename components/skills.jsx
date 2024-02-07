"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-20 2xln:pt-20" id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col text-center font-bold">
          <span className="text-6xl lgn:text-5xl">Potenciando tu empresa</span>
          <span className="text-6xl text-center text-sky-600 lgn:text-5xl">
            hacia el exito digital
          </span>
        </div>
      </motion.div>

      <div className="flex flex-col w-full gap-4 px-48 2xln:px-20 xln:px-2">
        <div className="flex w-full gap-4 lgn:flex-col">
          <motion.article
            className="flex flex-col gap-4 w-full border border-zinc-800 px-4 py-4 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, offset: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center font-semibold text-lg">
              Software personalizado
            </span>
            <p>
              Nuestro equipo en desarrollo de software está comprometido en
              brindar soluciones a medida para satisfacer las necesidades únicas
              de tu negocio.
              <span className="mdn:hidden">
                Desde aplicaciones web hasta soluciones empresariales complejas,
                nos enfocamos en ofrecer software de calidad que impulse el
                crecimiento y la eficiencia de tu empresa. Nuestro equipo se
                esfuerza por superar tus expectativas y en enfrentar nuevos
                desafíos.
              </span>
            </p>
          </motion.article>

          <motion.article
            className="flex flex-col gap-4 w-full border border-zinc-800 px-4 py-4 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, offset: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center text-lg font-semibold">
              Optimización y Automatización:
            </span>
            <p>
              Nuestro enfoque es optimizar los procesos empresariales,
              maximizando la eficiencia y mejorando la productividad mediante la
              automatización de tareas repetitivas.
              <span className="mdn:hidden">
                De forma meticulosa y orientada al detalle garantiza que cada
                solución se adapte perfectamente a las necesidades específicas
                de tu empresa, permitiéndote alcanzar tus objetivos con mayor
                rapidez y precisión.
              </span>
            </p>
          </motion.article>
        </div>

        <div className="flex w-full gap-4 lgn:flex-col">
          <motion.article
            className="flex flex-col gap-4 w-full border border-zinc-800 px-4 py-4 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, offset: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center text-lg font-semibold">
              Desarrollo y mantenimiento
            </span>
            <p>
              En LumarSoft entendemos que la evolución tecnológica es constante
              y que las necesidades de tu negocio pueden cambiar con el tiempo.
              <span className="mdn:hidden">
                Por ello, ofrecemos un servicio integral de desarrollo y
                mantenimiento de software diseñado para garantizar que tus
                aplicaciones estén siempre a la vanguardia y funcionando de
                manera óptima.
              </span>
            </p>
          </motion.article>
          <motion.article
            className="flex flex-col gap-4 w-full border border-zinc-800 px-4 py-4 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, offset: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center text-lg font-semibold">
              Gestión de infraestructura
            </span>
            <p>
              Comprendemos que una infraestructura sólida y confiable es
              fundamental para el éxito de cualquier proyecto tecnológico.
              <span className="mdn:hidden">
                Nuestro servicio de Gestión de Infraestructura está diseñado
                para proporcionarte la base sólida que necesitas para impulsar
                la innovación y permitiéndote centrarte en lo que realmente
                importa: Hacer crecer tu negocio.
              </span>
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Skills;

{
  /* <motion.div
  className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  viewport={{ once: true, offset: 0.3 }}
>
  <div className="flex flex-col gap-4 w-full">
    <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center font-semibold text-lg">
      Gestión de la información
    </span>
    <p>
      Brindamos servicios de consultoría en estrategia de tecnología
      de la información, asesorando a las organizaciones en la
      identificación y aplicación de soluciones tecnológicas que
      optimicen sus procesos y mejoren su competitividad en el
      mercado.
      <span className="mdn:hidden">
        Nuestro enfoque estratégico se basa en un análisis exhaustivo
        del entorno empresarial y en la alineación de la tecnología
        con los objetivos empresariales a largo plazo.
      </span>
    </p>
  </div>
</motion.div> */
}
