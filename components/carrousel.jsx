"use client";

import { Lucas, Mateo } from "@/lib/imgProvider";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carrousel = () => {
  return (
    <Splide>
      <SplideSlide>
        <Image src={Lucas} width={500} height={300} />
      </SplideSlide>
      <SplideSlide>
        <Image src={Mateo} width={500} height={300} />
      </SplideSlide>
    </Splide>
  );
};

export default Carrousel;
