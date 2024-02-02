"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-20 px-20 lgn:px-0">
      <div className="flex flex-col text-center font-bold">
        <span className="text-6xl lgn:text-5xl">Potenciando tu empresa</span>
        <span className="text-6xl text-center text-sky-600 lgn:text-5xl">
          hacia el exito digital
        </span>
      </div>

      <div className="flex flex-col gap-10 mdn:gap-4">
        <motion.div
          className="flex w-full gap-10 mdn:flex-col mdn:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image src={coding} width={70} height={90} className="bg-blue-950 p-1 rounded-md mb-3"/> */}
            {/* No me convence el poner iconos, realmente queda mejor sin. Creo que lo dejaria sin icono. */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center font-semibold text-lg">
                Software personalizado
              </span>
              <p>
                Nuestro equipo en desarrollo de software está comprometido en
                brindar soluciones a medida para satisfacer las necesidades
                únicas de tu negocio. Desde aplicaciones web hasta soluciones
                empresariales complejas, nos enfocamos en ofrecer software de
                calidad que impulse el crecimiento y la eficiencia de tu
                empresa. Nuestro equipo se esfuerza por superar tus expectativas
                y en enfrentar nuevos desafíos.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center font-semibold text-lg">
                Gestión de la información
              </span>
              <p>
                Brindamos servicios de consultoría en estrategia de tecnología
                de la información, asesorando a las organizaciones en la
                identificación y aplicación de soluciones tecnológicas que
                optimicen sus procesos y mejoren su competitividad en el
                mercado. Nuestro enfoque estratégico se basa en un análisis
                exhaustivo del entorno empresarial y en la alineación de la
                tecnología con los objetivos empresariales a largo plazo.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center text-lg font-semibold">
                Optimización y Automatización:
              </span>
              <p>
                Nuestro enfoque es optimizar los procesos empresariales,
                maximizando la eficiencia y mejorando la productividad mediante
                la automatización de tareas repetitivas. De forma meticulosa y
                orientada al detalle garantiza que cada solución se adapte
                perfectamente a las necesidades específicas de tu empresa,
                permitiéndote alcanzar tus objetivos con mayor rapidez y
                precisión.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex gap-10 px-32 mdn:flex-col xln:px-10 mdn:px-0 mdn:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center text-lg font-semibold">
                Desarrollo y mantenimiento
              </span>
              <p>
                En LumarSoft entendemos que la evolución tecnológica es
                constante y que las necesidades de tu negocio pueden cambiar con
                el tiempo. Por ello, ofrecemos un servicio integral de
                desarrollo y mantenimiento de software diseñado para garantizar
                que tus aplicaciones estén siempre a la vanguardia y funcionando
                de manera óptima.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-zinc-800 px-4 py-4">
            {/* <Image width={50} height={80} /> */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center text-lg font-semibold">
                Gestión de infraestructura
              </span>
              <p>
                Comprendemos que una infraestructura sólida y confiable es
                fundamental para el éxito de cualquier proyecto tecnológico.
                Nuestro servicio de Gestión de Infraestructura está diseñado
                para proporcionarte la base sólida que necesitas para impulsar
                la innovación y permitiéndote centrarte en lo que realmente
                importa: Hacer crecer tu negocio.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
