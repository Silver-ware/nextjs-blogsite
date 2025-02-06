import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

import { Roboto } from "next/font/google";

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
      <Layout hasNavBG={Component.hasNavBG !== false}>      
          <Component {...pageProps} />
      </Layout>
    );
  }

}
