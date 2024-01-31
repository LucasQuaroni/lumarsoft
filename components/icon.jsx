"use client";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";

export default function Icon({ name, image }) {
  return (
    <a
      data-tooltip-id="my-tooltip"
      data-tooltip-content={name}
      className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3 flex justify-center items-center"
    >
      <Image src={image} width={50} height={50} />
      <Tooltip id="my-tooltip" />
    </a>
  );
}
