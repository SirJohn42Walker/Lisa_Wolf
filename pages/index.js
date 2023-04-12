import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lisa Wolf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1>Lisa Wolf</h1>
      <Navbar />
      <h2>Home</h2>
    </>
  );
}
