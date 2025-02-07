import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout ({children, hasNavBG = false, newBG}) {
  return(
    <>
      <Navbar hasNavBG={hasNavBG}/>
        {children}
      <Footer/>
    </>
  )
}