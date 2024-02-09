import Hero from "../components/hero";
import Blur from "@/components/blur";
import Technologies from "@/components/technologies";
import SecondSkills from "@/components/secondSkills";
import WhyChoose from "@/components/WhyUs";
export default function Home() {
  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4 flex flex-col ">
        <Hero />

        <SecondSkills />

        <Technologies />

        <WhyChoose />
      </div>
    </main>
  );
}
