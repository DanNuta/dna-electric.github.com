import React, {PropsWithChildren} from "react";
import * as Style from "./VPersonal.module";
import {PersonalModel} from "../../models/personal.model";

type Props = {
    data: PersonalModel,
    img?: string
}

export const VPersonalView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        <Style.PersonalDiv>
            <img src={props.data.img} alt="" />
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
        </Style.PersonalDiv>
    )
}