import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

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

      <Skills />
    </div>
  );
}
