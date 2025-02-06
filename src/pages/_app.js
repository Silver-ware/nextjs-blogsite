import "@/styles/globals.css";
import Layout from "@/components/Layout";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export default function App({ Component, pageProps }) {
  return (
    <Layout>      
        <Component {...pageProps} />
    </Layout>
  );

}
