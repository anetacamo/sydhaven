import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

export const SinglePageLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <section className="bg-black center" style={{ height: "100vh" }}>
        <h1>{title}</h1>
        {children}
      </section>
      <Footer />
    </>
  );
};
