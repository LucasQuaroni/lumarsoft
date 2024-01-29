import Image from "next/image";
import logo from "../public/Lumar.png";
import linkedin from "../public/linkedin.png";
import github from "../public/github.png";

function Navbar() {
  return (
    <nav className="w-full flex absolute px-16 py-2 items-center gap-4 font-semibold justify-between">
      <div className="flex items-center gap-5">
        <Image src={logo} width={60} height={60} />
        <span>Servicios</span>
        <span>Tecnologias</span>
        <span>Nosotros</span>
        <span>Contáctanos</span>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/LucasQuaroni/lumarsoft" target="_blank">
          <Image src={github} width={40} height={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/lumar-soft-3805752b1/"
          target="_blank"
        >
          <Image src={linkedin} width={40} height={40} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
