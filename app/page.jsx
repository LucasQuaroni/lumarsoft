import Hero from "../components/hero";
import Blur from "@/components/blur";
import Technologies from "@/components/technologies";
import SecondSkills from "@/components/secondSkills";
import WhyChoose from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Nosotros from "@/components/Nosotros";
import whatsApp from "../public/Icons/WhatsApp_icon.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4 flex flex-col ">
        <Hero />

        <SecondSkills />

        <WhyChoose />

        <Nosotros />

        <Technologies />

        <Contact />

        <div className="flex justify-center items-center gap-4 mb-2">
          <p>LumarSoft - Todos los derechos reservados - 2024</p>
        </div>
      </div>
    </main>
  );
}
