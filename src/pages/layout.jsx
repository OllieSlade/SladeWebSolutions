import { Outlet} from "react-router-dom";
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;