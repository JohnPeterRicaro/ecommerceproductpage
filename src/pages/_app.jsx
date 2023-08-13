import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CheckOut from "@/components/checkout/CheckOut";
import IdImageViewer from "@/components/imageview/IdImgViewer";
import ImageViewer from "@/components/imageview/ImageViewer";
import { ContextProvider } from "@/contextprovider/ContextProvider";
import "@/styles/globals.css";
import { Kumbh_Sans } from "next/font/google";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const kumbSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: ["--font-kumbSans"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <title>ECommerce App</title>
      </Head>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <div
            className={`relative ${kumbSans.variable} font-kumbSans text-[16px]`}
          >
            <CheckOut/>
            <IdImageViewer/>
            <ImageViewer />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </QueryClientProvider>
      </ContextProvider>
    </>
  );
}
