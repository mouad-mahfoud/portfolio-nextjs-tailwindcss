import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Azza | Développement web</title>
        <meta name='description' content='agence web 360' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Main />

      <About />
    </div>
  );
}
