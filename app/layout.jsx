import Navbar from "../components/navbar";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import WspBtn from "@/components/WspBtn";
import Head from "next/head";

<link rel="icon" href="/favicon.ico" sizes="any" />;


export const metadata = {
  title: "LumarSoft",
  description:
    "Consultora de desarrollo de software comprometida con la excelencia y la satisfacción del cliente. Ofrecemos soluciones personalizadas para tus necesidades de desarrollo. Actua ahora. Crea el futuro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${GeistSans.className} text-white bg-black overflow-x-hidden `}
      >
        <Navbar />
        {children}
        <WspBtn />
      </body>
    </html>
  );
}
