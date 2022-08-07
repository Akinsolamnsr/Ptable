import { NextPage } from "next"
import Footer from "./Footer";
import Navbar from "./navBar";

type mainLayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}:mainLayoutProps) => {
 
    return (
      <div  className="">
    <Navbar />
        {children}
        <Navbar />
      </div>
     
    )
  }

  export default Layout