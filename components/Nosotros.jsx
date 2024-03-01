import React from "react";
import "./nosotros.css";
import { FaCheck } from "react-icons/fa6";

const Nosotros = ({ lenguaje }) => {
  return (
    <section
      className="w-full min-h-screen h-full flex flex-col items-center justify-center "
      id="nosotros"
    >
      <div className="space-y-2">
        <div className="space-y-2">
          <div className="items-center flex justify-center">
            <div className="inline-block rounded-lg px-7 py-2 text-5xl font-semibold bg-gray-800 text-sky-500 mb-2">
              Nosotros
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">
              Tu Socio en Desarrollo de Software
            </h2>
            <p className="max-w-3xl text-gray-400">
              Somos una consultora de software especializada en ofrecer
              soluciones personalizadas y eficientes para empresas de todos los
              tamaños. Nuestro equipo de expertos en desarrollo está
              comprometido en convertirse en tu socio estratégico para alcanzar
              tus objetivos tecnológicos.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Nuestros Valores</h3>
            <ul className="grid gap-2">
              <li className="flex items-start space-x-2">
                <FaCheck className="inline-block h-4 w-4" />
                <span className="text-sm leading-none">
                  Compromiso con la excelencia en cada proyecto.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FaCheck className="inline-block h-4 w-4" />
                <span className="text-sm leading-none">
                  Transparencia y honestidad en todas nuestras interacciones.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FaCheck className="inline-block h-4 w-4" />
                <span className="text-sm leading-none">
                  Colaboración estrecha y comunicación abierta con nuestros
                  clientes.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FaCheck className="inline-block h-4 w-4" />
                <span className="text-sm leading-none">
                  Innovación constante y búsqueda de soluciones creativas.
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Nuestra Misión</h3>
            <p className="max-w-3xl text-gray-400">
              En LumarSoft, nos comprometemos a brindar soluciones de software
              de alta calidad que impulsen el éxito de nuestros clientes.
              Nuestra misión es colaborar estrechamente con cada cliente para
              entender sus necesidades y ofrecer soluciones innovadoras y
              personalizadas que superen sus expectativas. Estamos dedicados a
              proporcionar un servicio excepcional, impulsado por la excelencia
              técnica y el compromiso con la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

{
  /* <h1 className="text-5xl font-bold text-center">{lenguaje.title1}</h1>
<div className="grid-cols-2 smn:grid-cols-1 md:flex-row md:gap-10 hidden md:grid">
  <div className="image-container mb-10 md:mb-0">
    <Image
      src={Mateo}
      width={380}
      alt="Foto de Mateo Bodini"
      className="rounded-xl"
    />
    <div className="overlay">
      <div className="overlay-content">
        <h5>{lenguaje.persons[0].name}</h5>
        <p>{lenguaje.persons[0].description}</p>
        <a
          href="https://www.linkedin.com/in/mateobodini"
          target="_blank"
        >
          {lenguaje.a}
        </a>
      </div>
    </div>
  </div>
  <div className="image-container">
    <Image
      src={Lucas}
      width={380}
      alt="Foto de Lucas Quaroni"
      className="rounded-xl"
    />
    <div className="overlay">
      <div className="overlay-content">
        <h5>{lenguaje.persons[1].name}</h5>
        <p>{lenguaje.persons[1].description}</p>
        <a
          href="https://www.linkedin.com/in/lucasquaroni/"
          target="_blank"
        >
          {lenguaje.a}
        </a>
      </div>
    </div>
  </div>
</div>

<Carrousel/>
*/
}
