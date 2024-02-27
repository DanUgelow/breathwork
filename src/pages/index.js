import Head from "next/head";
import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.scss";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vital Flow Breathwork</title>
        <meta
          name='description'
          content='Transformational private and group breathwork sessions. Improve your health and feel amazing.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo-sm.png' />
      </Head>
      <div>
        <Nav />
        <main className={styles.main}>
          <Header />
          <Benefits />
          <About />
          <Services />
          <Contact />
        </main>
      </div>
    </>
  );
}
