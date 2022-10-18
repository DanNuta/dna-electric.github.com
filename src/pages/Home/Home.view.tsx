import React from "react";
import {Home} from "../Home/SudareExotermica/Home";
import {FiiInSiguranta} from "../Home/FiiInSiguranta/FiiInSiguranta";
import * as Style from "./Home.model";
import { DespreNoi } from "./DespreNoi/DespreNoi";
import { CeOferim } from "./CeOferim/CeOferim";
import {ParatrasnetPda} from "./ParatrasnetPda/ParatrasnetPda";
import {Personal} from "../Home/Personal/Personal";
import {EtapeleDeLucru} from "../Home/EtapeleDeLucru/EtapeleDeLucru";
import { Contact } from "../Contact/Contact";
import { Container } from "@mui/system";
import {useLocation} from "react-router-dom";
import {VCookieView} from "../../components/VCookie/VCookie.view";






export const HomeView: React.FC = () =>{


  

    return (

        <Container maxWidth="xl">

           <VCookieView></VCookieView>

          
        <Style.HomeDiv>
            <Home/>

            <FiiInSiguranta/>

            <DespreNoi/>

            <CeOferim/>


            <ParatrasnetPda/>


            <Personal/>



            <EtapeleDeLucru/>


           


            
        </Style.HomeDiv>

        </Container>
    )
}