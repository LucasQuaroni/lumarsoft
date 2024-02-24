"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import whatsApp from "@/public/Icons/whatsapp.png";
const WspBtn = () => {
  return (
    <motion.div
      className="w-full flex absolute px-16 py-2 items-center gap-4 font-semibold justify-between lgn:px-10  smn:px-4 z-50 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <a
        href="https://wa.me/543412776893"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 smn:right-3"
      >
        <Image src={whatsApp} alt="WhatsApp Logo" width={60} height={60}  className="smn:w-14 smn:h-14"/>
      </a>
    </motion.div>
  );
};

export default WspBtn;
