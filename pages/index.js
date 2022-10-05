import Head from "next/head";
import Layout from "../components/Layout/layout";
import CreditCard from "../components/sections/CreditCard";
import Currency from "../components/sections/Currency";
import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import Trade from "../components/sections/Trade";
import TradingTool from "../components/sections/TradingTool";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cryptoweb - for all your digital curruncy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Currency />
        <Trade />
        <Partners />
        <CreditCard />
        <TradingTool />
      </Layout>
    </div>
  );
}
