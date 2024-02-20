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
      className="w-full flex absolute px-16 py-2 items-center gap-4 font-semibold justify-between lgn:px-10 smn:px-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      }}
    >
      <div className="flex items-center gap-5">
        <a href="">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="software consulting logo"
          />
        </a>
        <div className="flex gap-5 mdn:hidden aTech">
          <a href="#services">
            {params.lang === "es" ? "Servicios" : "Services"}
          </a>
          <a href="#whyUs">
            {params.lang === "es" ? "Por que nosotros?" : "Why we?"}
          </a>
          <a href="nosotros">
            {params.lang === "es" ? "Nosotros" : "About us"}
          </a>
          <a href="#technologies">
            {params.lang === "es" ? "Tecnologias" : "Technologies"}
          </a>
          <a href="#contact">{params.lang === "es" ? "Contacto" : "Contact"}</a>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        {params.lang === "en" ? (
          <a href="/es" className="font-semibold">
            <Image src={spain} width={40} height={40} />
          </a>
        ) : (
          <a href="/en" className="font-semibold">
            <Image src={english} width={40} height={40} />
          </a>
        )}
        <a href="https://github.com/LucasQuaroni/lumarsoft" target="_blank">
          <Image src={github} width={40} height={40} alt="asd" />
        </a>
        <a href="https://www.linkedin.com/company/lumar-soft/" target="_blank">
          <Image src={linkedin} width={40} height={40} alt="asd" />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
