import { FirebaseError } from "firebase/app";
import React, { PropsWithChildren, useEffect, useState } from "react";
import {ParatrasnetModel} from "../../../models/paratrasnet.model";
import * as Style from "./ParatrasnetPda.module"

type Props = {
    data: ParatrasnetModel,
    error: FirebaseError | null,
    isPending: boolean
}

export const ParatrasnetPdaView:React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    
    return (
        <Style.DivElement>
            <h1 className="title">{props.data.title}</h1>


     <Style.FlexElementDiv>
        <p className="desc_title">{props.data.description_title}</p>


        <Style.OverlayImg>

           <div className="img_element">
              <img src={props.data.img} alt="" />

            <div className="yollow"></div>
           </div>


        </Style.OverlayImg>



     </Style.FlexElementDiv>

     <Style.FlexElementDiv>
        <h1 className="img_desc">{props.data.img_descrition_title}</h1>
        <p>{props.data.img_descrition}</p>
     </Style.FlexElementDiv>

        </Style.DivElement>
    )
}