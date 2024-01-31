import Skills from "@/components/skills";
import Hero from "../components/hero";
import Blur from "@/components/blur";
import Technologies from "@/components/technologies";
export default function Home() {
  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4">
        <Hero />
        <hr className="mt-1 my-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25 dark:opacity-100" />
        <Skills />

        <Technologies />
      </div>
    </main>
  );
}
