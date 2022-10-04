import React, {PropsWithChildren} from "react";
import { EtapeleDeLucruModel } from "../../../models/etapeleDeLucru";
import * as Style from "./EtapeleDeLucru.module";
import {VButton} from "../../../components/VButton/VButton";


type Props = {
    data: EtapeleDeLucruModel[];
}

export const EtapeleDeLucruView:React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    console.log(props)
    return (
        <Style.EtapeleDeLucruDiv>
            <h1 className="title">Etapele de lucru</h1>


            {props.data && props.data.map((item, index) => (
                <Style.EtapeleLucruItemDiv>
                     <div className="title">
                        <h1>{index +1}</h1>
                        <h1>{item.title}</h1>

                     </div>
                     <div className="img">
                        <img src={item.img} alt="" />
                     </div>
                </Style.EtapeleLucruItemDiv>
            ))}


            <VButton bg="#272727"><a href="/contacte">Contacteaza-ne</a></VButton>
        </Style.EtapeleDeLucruDiv>
    )
}