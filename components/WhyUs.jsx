"use client";
import React from "react";
import ReasonCard from "./WhyUsObject";
import { SlEnergy } from "react-icons/sl";
import { FaUserCheck } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa";
const WhyUs = () => {
  return (
    <div className="max-w-5xl mx-auto mb-10 mt-40 text-center " id="whyUs">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h5 className="text-5xl font-semibold mb-6 smn:text-3xl">
          Por qué elegirnos
        </h5>
        <p className="mb-8 smn:text-sm">
          En <b className="text-sky-400">LumarSoft</b>, sabemos que elegir el
          socio adecuado para tus necesidades de desarrollo de software es
          crucial.{" "}
          <span className="smn:hidden">
            Aunque somos una PYME emergente,{" "}
            <b className="text-sky-400">nuestro compromiso con la excelencia</b>{" "}
            y la <b className="text-sky-400">satisfacción del cliente</b> es
            inquebrantable.
          </span>
          Aquí te presentamos algunas razones para elegirnos:
        </p>
      </motion.div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, offset: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, offset: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ReasonCard
            icon={<SlEnergy className="text-3xl text-blue-500 mb-2 mx-auto" />}
            title="Innovación y Experiencia"
            description="Nuestro equipo aporta una combinación única de conocimientos técnicos sólidos, ofreciendo soluciones innovadoras y creativas."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, offset: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ReasonCard
            icon={
              <FaHandshakeSimple className="text-3xl text-yellow-500 mb-2 mx-auto" />
            }
            title="Enfoque Personalizado"
            description="Cada proyecto es único. Trabajamos estrechamente contigo para adaptarnos a tus necesidades específicas."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, offset: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ReasonCard
            icon={
              <FaChartLine className="text-3xl text-green-500 mb-2 mx-auto" />
            }
            title="Calidad y Fiabilidad"
            description="Priorizamos la calidad en todo lo que hacemos, entregando productos confiables que superan las expectativas."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, offset: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ReasonCard
            icon={
              <FaUserCheck className="text-3xl text-orange-500 mb-2 mx-auto" />
            }
            title="Compromiso con tu Éxito"
            description="Tu éxito es nuestra prioridad. Nos comprometemos a trabajar contigo en cada etapa del proyecto para garantizar que alcances tus metas."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, offset: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ReasonCard
            icon={
              <FcProcess className="text-3xl text-orange-500 mb-2 mx-auto" />
            }
            title="Excelencia Continua"
            description="Nos mantenemos actualizados con las últimas tecnologías y tendencias, asegurando que recibas soluciones de vanguardia."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, offset: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ReasonCard
            icon={
              <FaHandHoldingHeart className="text-3xl text-pink-500 mb-2 mx-auto" />
            }
            title="Transparencia y Honestidad"
            description="Creemos en la transparencia y la honestidad en nuestras relaciones comerciales. Te mantendremos informado en cada paso del desarrollo."
          />
        </motion.div>
      </motion.div>
    </div>
    // </div>
  );
};

export default WhyUs;
