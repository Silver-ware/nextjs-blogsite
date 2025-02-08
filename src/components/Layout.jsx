import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRef } from "react";
import { createContext } from "react";

export const ScrollContext = createContext();

export default function Layout ({children, hasNavBG = false, newBG}) {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      const yOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };


  return(
    <>
    <ScrollContext.Provider value={{ scrollToSection, sectionRef }}>
      <Navbar hasNavBG={hasNavBG} />
      {children}
      <Footer />
    </ScrollContext.Provider>
    </>
  )
}