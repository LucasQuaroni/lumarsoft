"use client";

import { Lucas, Mateo } from "@/lib/imgProvider";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";

const Carrousel = () => {
  return (
    <Splide className="md:hidden">
      <SplideSlide className="flex w-full justify-center">
        <Link href="https://www.linkedin.com/in/lucasquaroni/">
          <Image src={Lucas} width={400} alt="Perfil de Lucas Quaroni" />
        </Link>
      </SplideSlide>
      <SplideSlide className="flex w-full justify-center">
        <Link href="https://www.linkedin.com/in/mateobodini">
          <Image src={Mateo} width={400} alt="Perfil de Mateo Bodini" />
        </Link>
      </SplideSlide>
      <SplideSlide className="flex w-full justify-center">
        <Link href="https://www.linkedin.com/in/benitez-marcelo">
          <Image src={Lucas} width={400} alt="Perfil de Marcelo Benitez" />
        </Link>
      </SplideSlide>
    </Splide>
  );
};

export default Carrousel;
