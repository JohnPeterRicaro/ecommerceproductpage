import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Kumbh_Sans } from "next/font/google";
import Head from "next/head";

const kumbSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: ["--font-kumbSans"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <title>ECommerce App</title>
      </Head>
      <div className={` ${kumbSans.variable} font-kumbSans text-[16px]`}>
        <NavBar/>
        <Component {...pageProps} />
      </div>
    </>
  );
}
