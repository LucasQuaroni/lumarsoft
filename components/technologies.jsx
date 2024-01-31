import React from "react";
import Image from "next/image";
import jsicon from "../public/JSicon.png";
const Technologies = () => {
  return (
    <section className="w-full h-screen">
      <h3 className="text-6xl font-semibold text-center mt-16">Tecnologias</h3>
      <p className="text-center text-xl mt-4">
        Estas son algunas de las teconogoas que utilizamos para desarrollar tus
        proyectos.
      </p>
      {/* Capaz lo mejor seria crear un objeto con todas las tecnologias y hacer un mapeo de eso, por el momento voy hacer esto a modo de ejemplo (charlar con el grupo.) */}
      {/* Otra idea puede ser separar como en dos cards, donde una contenga por ejemplo: Tech Stack FrontEnd (y poner stack de frontend) y en la otra card poner  Tech Stack Backend (y poner stack de backend)*/}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg xs:mx-3 mt-6">
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">React</h4>
          <p>Aqui iria el logo de react y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">NodeJS</h4>
          <p>Aqui iria el logo de NodeJS y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">Java</h4>
          <p>Aqui iria el logo de Java y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">NextJs</h4>
          <p>Aqui iria el logo de NextJs y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">TailwindCSS</h4>
          <p>Aqui iria el logo de Tailwind y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">Php</h4>
          <p>Aqui iria el logo de Php y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">Javascript</h4>
          <p>Aqui iria el logo de Javascript y capaz una desc</p>
        </div>
        <div className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg p-3">
          <h4 className="text-2xl font-semibold">SQL</h4>
          <p>Aqui iria el logo de SQL y capaz una desc</p>
        </div>

        <div class="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg">
          <div class="bg-gray-900 p-4 rounded-lg shadow-md mb-4 h-full hover:bg-slate-800 transition duration-300 ease-in-out">
            <div class="flex items-center justify-center p-2"></div>
            <h4 className="text-2xl font-semibold">MongoDB</h4>
          <p>Este seria otro ejemplo</p>
          </div>
        </div>
        <div class="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg">
          <div class="bg-gray-900 p-4 rounded-lg shadow-md mb-4 h-full hover:bg-slate-800 transition duration-300 ease-in-out">
            <div class="flex items-center justify-center p-2"></div>
            <h4 className="text-2xl font-semibold">Vercel</h4>
          <p>Este seria otro ejemplo</p>
          </div>
        </div>
        <div class="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg">
          <div class="bg-gray-900 p-4 rounded-lg shadow-md mb-4 h-full hover:bg-slate-800 transition duration-300 ease-in-out">
            <div class="flex items-center justify-center p-2"></div>
            <h4 className="text-2xl font-semibold">Firebase</h4>
          <p>Este seria otro ejemplo</p>
          </div>
        </div>
        <div class="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg">
          <div class="bg-gray-900 p-4 rounded-lg shadow-md mb-4 h-full hover:bg-slate-800 transition duration-300 ease-in-out">
            <div class="flex items-center justify-center p-2"></div>
            <h4 className="text-2xl font-semibold">AWS</h4>
          <p>Este seria otro ejemplo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
