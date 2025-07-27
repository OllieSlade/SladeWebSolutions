import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useState, useLayoutEffect, useEffect } from 'react'
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import Layout from "./pages/layout";


function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    
    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    return children;
  };



  return (
    <BrowserRouter>
      <Wrapper />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
