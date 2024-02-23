import Hero from "../../components/hero";
import Blur from "@/components/blur";
import Technologies from "@/components/technologies";
import SecondSkills from "@/components/secondSkills";
import WhyChoose from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Nosotros from "@/components/Nosotros";

export default async function Page({ params: { lang } }) {
  const dictionary = await import(`@/app/dictionary/${lang}.json`).then(
    (res) => res.default
  );

  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4 flex flex-col ">
        <Hero lenguaje={dictionary.Hero} />

        <SecondSkills lenguaje={dictionary.SecondSkill} />

        <WhyChoose lenguaje={dictionary.WhyChoose} />

        <Technologies lenguaje={dictionary.Technologies} />

        <Nosotros lenguaje={dictionary.About} />

        <Contact lenguaje={dictionary.Contact} />

        <div className="flex justify-center items-center gap-4 mb-2 smn:text-sm smn:mb-0">
          <span>{dictionary.Rights}</span>
        </div>
      </div>
    </main>
  );
}
