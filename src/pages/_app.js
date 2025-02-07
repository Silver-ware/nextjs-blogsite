import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

import { Roboto } from "next/font/google";
import { title } from "process";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const routes = useRouter();
  const noLayout = ["/auth"];

  if(noLayout.includes(routes.pathname)){
    return <Component {...pageProps} />
  } else{
    return (
      <>
        <Head>
          <title>Blog Website</title>
          <meta name="description" content="This is the default description" />
        </Head>
        <Layout hasNavBG={Component.hasNavBG !== false}>      
            <Component {...pageProps} />
        </Layout>
      </>
    );
  }

}
