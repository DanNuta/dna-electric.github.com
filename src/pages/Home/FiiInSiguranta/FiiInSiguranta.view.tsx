import { FirebaseError } from "firebase/app";
import React, { PropsWithChildren } from "react";
import {fiiInSiguranta} from "../../../models/fiiInSiguranta.model";
import * as Styled from "./FiiInSiguranta.model";

type Props = {
    data: fiiInSiguranta;
    error: FirebaseError | null;
    isPending: boolean;
}


export const FiiInSigurantaView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return (

        <Styled.FiiinSiguranta>
            <h1>{props.data.title}</h1>

            <Styled.DisplayImgP>
                <img src={props.data.img_stanga} alt="" />
                <p>{props.data.description_bottom_title}</p>

                <Styled.BoxYollow>
                    <p>{props.data.box_yellow}</p>
                </Styled.BoxYollow>

            </Styled.DisplayImgP>

            <p className="descrition_button">{props.data.description_bottom_img}</p>
        </Styled.FiiinSiguranta>
    )
}