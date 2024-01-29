"use client";

import Hero from "../components/hero";

export default function Home() {
  return (
    <main className="text-white">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#111013] bg-[radial-gradient(100%_70%_at_50%_0%,rgba(0,163,255,0.15)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="px-20 lgn:px-10 smn:px-4">
        <Hero />
      </div>
    </main>
  );
}
