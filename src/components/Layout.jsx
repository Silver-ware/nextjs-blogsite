import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
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

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return(
    <>
    <ScrollContext.Provider value={{ scrollToSection, sectionRef, isInView, setIsInView }}>
      <Navbar hasNavBG={hasNavBG} />
      {children}
      <Footer />
    </ScrollContext.Provider>
    </>
  )
}