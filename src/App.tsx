import { HomeView } from "./pages/Home/Home.view";
import { Navbar } from "./components/Navbar/Navbar";
import { VFooter } from "./components/VFooter/VFooter";
import {GlobalStyles} from "./components/styles/Global.module";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Contact} from "./pages/Contact/Contact";
import {Impamantare} from "./pages/Impamantare/Impamantare";
import React, {useContext} from "react";
import {NavbarContext} from "./context/Context.navbar";
import { Products } from "./pages/Products/Products";


function App(){


  const contextNav = useContext(NavbarContext);

  
  return (

    <BrowserRouter>
    <>

      <Navbar bg="#272727"/>

      <GlobalStyles/>

      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path={contextNav?.contacte} element={<Contact/>}/>
        <Route path={`${contextNav?.impamantare}/*`} element={<Impamantare/>}/>

        <Route path="impamantare/:id" element={<Products/>}/>
      </Routes>


     

        

      {/* <HomeView/> */}


      <VFooter/>
    </>

    </BrowserRouter>
  )

}

export default App;