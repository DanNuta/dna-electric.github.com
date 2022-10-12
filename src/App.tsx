import { HomeView } from "./pages/Home/Home.view";
import { Navbar } from "./components/Navbar/Navbar";
import { VFooter } from "./components/VFooter/VFooter";
import {GlobalStyles} from "./components/styles/Global.module";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import {Contact} from "./pages/Contact/Contact";
import {Impamantare} from "./pages/Impamantare/Impamantare";
import React, {useContext} from "react";
import {NavbarContext} from "./context/Context.navbar";
import { Products } from "./pages/Products/Products";
import { Supratensiuni } from "./pages/Supratensiuni/Supratensiuni";
import {ProductsProvider} from "./context/Context.products";
import {ProduseContextModel} from "./models/produseContext.model";
import {ProduseSimilare} from "./pages/Products/produseSimilare/ProduseSimilare.view";
import { Paratrasnet } from "./pages/Paratrasnet/Paratrasnet";
import { ScrollToTop } from "./components/VScroll/VScroll";


function App(){


  const contextNav = useContext(NavbarContext);
  const {impamantare, supratensiune, paratrasnet} = useContext(ProductsProvider) as ProduseContextModel;


  

  
  return (

    <BrowserRouter>

    <ScrollToTop>
    <>

      <Navbar data={contextNav} bg="#272727"/>

      <GlobalStyles/>

      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path={contextNav?.contacte} element={<Contact/>}/>




        <Route path={contextNav?.impamantare} element={<ProduseSimilare/>}>
             <Route index element={<Impamantare/>}/>
             <Route path=":id" element={<Products link={contextNav?.impamantare} products={impamantare.data} collection="IMPAMANTARE"/>}/>                 
        </Route>


        <Route path={contextNav?.supratensiune} element={<ProduseSimilare/>}>
          <Route index element={<Supratensiuni products={supratensiune}/>}/>
          <Route path=":id" element={<Products link={contextNav?.supratensiune} products={supratensiune.data} collection="SUPRATENSIUNI"/>}/>                 
        </Route>

        <Route path={contextNav?.paratrasnet} element={<ProduseSimilare/>}>
          <Route index element={<Paratrasnet products={paratrasnet}/>}/>
          <Route path=":id" element={<Products link={contextNav?.paratrasnet} products={paratrasnet.data} collection="PARATRASNET"/>}/>                 
        </Route>


      </Routes>


     

        

      {/* <HomeView/> */}


      <VFooter/>
    </>

    </ScrollToTop>

    </BrowserRouter>
  )

}

export default App;