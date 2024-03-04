"use client";
import Image from "next/image";
import logo from "../public/Icons/Lumar.png";
import linkedin from "../public/Icons/linkedin.png";
import github from "../public/Icons/github.png";
import { motion } from "framer-motion";
import "./navbar.css";
import { useParams } from "next/navigation";
import spain from "../public/Icons/spain.png";
import english from "../public/Icons/estadosUnidos.png";

function Navbar() {
  const params = useParams();

  return (
    <motion.nav
      className="w-full flex absolute px-16 py-2 items-center gap-4 font-semibold justify-around lgn:px-10 smn:px-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      }}
    >
      <div className="flex items-center gap-5 justify-center">
        <a href="/">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="Logo consultora de software LumarSoft"
          />
        </a>
        <div className="flex gap-5 mdn:hidden aTech items-center">
          <a href="#services">
            {params.lang === "es" ? "Nuestros Servicios" : "Our Services"}
          </a>
          <a href="#whyUs">
            {params.lang === "es" ? "¿Por qué elegirnos?" : "Why Us?"}
          </a>
          <a href="#technologies">
            {params.lang === "es" ? "Tecnologías" : "Technologies"}
          </a>
          <a href="#nosotros">
            {params.lang === "es" ? "Sobre Nosotros" : "About LumarSoft"}
          </a>
      
        </div>
      </div>

      <div className="flex gap-3 items-center">
        {params.lang === "en" ? (
          <a href="/es" className="font-semibold" rel="noopener noreferrer">
            <Image
              src={spain}
              width={40}
              height={40}
              alt="es_ES"
              title="Spanish"
            />
          </a>
        ) : (
          <a href="/en" className="font-semibold" rel="noopener noreferrer">
            <Image
              src={english}
              width={40}
              height={40}
              alt="en_GB"
              title="English"
            />
          </a>
        )}
        <a
          href="https://github.com/LucasQuaroni/lumarsoft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={github} width={40} height={40} alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/lumar-soft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedin} width={40} height={40} alt="LinkedIn logo" />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
