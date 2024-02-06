"use client";
import Image from "next/image";
import logo from "../public/Lumar.png";
import linkedin from "../public/linkedin.png";
import github from "../public/github.png";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="w-full flex absolute px-16 py-2 items-center gap-4 font-semibold justify-between lgn:px-10 smn:px-4"
      initial={{ y: -250 }}
      animate={{ y: -5 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center gap-5">
        <Image src={logo} width={60} height={60} alt="asd" />
        <div className="flex gap-5 mdn:hidden">
          <span>Servicios</span>
          <span>Tecnologias</span>
          <span>Nosotros</span>
          <span>Contáctanos</span>
        </div>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/LucasQuaroni/lumarsoft" target="_blank">
          <Image src={github} width={40} height={40} alt="asd" />
        </a>
        <a
          href="https://www.linkedin.com/in/lumar-soft-3805752b1/"
          target="_blank"
        >
          <Image src={linkedin} width={40} height={40} alt="asd" />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
