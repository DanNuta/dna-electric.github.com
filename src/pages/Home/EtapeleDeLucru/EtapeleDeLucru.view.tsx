import React, {PropsWithChildren, useContext} from "react";
import { EtapeleDeLucruModel } from "../../../models/etapeleDeLucru";
import * as Style from "./EtapeleDeLucru.module";
import { LinkCOmponent } from "../../../components/VLink/VLink";
import {NavbarContext} from "../../../context/Context.navbar";
import {NavbarType} from "../../../models/navbar.model";

type Props = {
    data: EtapeleDeLucruModel[];
}

export const EtapeleDeLucruView:React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const contextNavbar = useContext(NavbarContext) as NavbarType;
    return (
        <Style.EtapeleDeLucruDiv>
            <h1 className="title">Etapele de lucru</h1>


            {props.data && props.data.map((item, index) => (
                <Style.EtapeleLucruItemDiv key={index}>
                     <div className="title">
                        <h1>{index +1}</h1>
                        <h1>{item.title}</h1>

                     </div>
                     <div className="img">
                        <img src={item.img} alt="" />
                     </div>
                </Style.EtapeleLucruItemDiv>
            ))}


          <LinkCOmponent onClick={() => {window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });}} bg="#272727" color="white" link={contextNavbar?.contacte}>Contacteaza-ne</LinkCOmponent>
        </Style.EtapeleDeLucruDiv>
    )
}