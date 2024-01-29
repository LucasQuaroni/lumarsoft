function Hero() {
  return (
    <section className="w-full h-screen  flex py-56 flex-col items-center gap-9 text-center">
      <div className="flex flex-col gap-2">
        <div className="tracking-tighter text-9xl 2xln:text-9xl lgn:text-8xl mdn:text-7xl smn:text-6xl font-semibold">
          <h1>Actúa ahora.</h1>
          <h2 className="text-[#1493f6] font-bold">Crea el futuro.</h2>
        </div>
        <span className="text-2xl text-zinc-500 text-center">
          Innovación que inspira, soluciones que impactan
        </span>
      </div>
      <button className="bg-[#1493f6] px-5 py-3 font-semibold rounded-xl hover:bg-sky-700 transition-all duration-300">
        Comenzar
      </button>
    </section>
  );
}

export default Hero;
