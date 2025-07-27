import { Outlet} from "react-router-dom";
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import Hamburger from "../components/sections/hamburger"
import Banner from "../components/sections/banner";

const Layout = () => {
  return (
    <>
      <Hamburger />
      <Banner />
      <Header />

      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;