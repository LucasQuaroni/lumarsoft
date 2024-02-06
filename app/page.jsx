import Skills from "@/components/skills";
import Hero from "../components/hero";
import Blur from "@/components/blur";
import Technologies from "@/components/technologies";
export default function Home() {
  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4 flex flex-col ">
        <Hero />
        
        <Skills />

        <Technologies />
      </div>
    </main>
  );
}
