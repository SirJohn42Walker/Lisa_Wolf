import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import PageHeader from "@/components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lisa Wolf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageHeader />
      <Navbar />
      <h2>Home</h2>
    </>
  );
}
