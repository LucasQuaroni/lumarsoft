"use client";
import React from "react";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
export default function Icon({ name, image, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-tooltip-id="my-tooltip"
      data-tooltip-content={name}
      className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3 flex justify-center items-center"
    >
      <Image
        src={image}
        width={70}
        height={70}
        className="smn:w-12 smn:h-12"
        alt={name}
      />
      <Tooltip id="my-tooltip" />
    </a>
  );
}
