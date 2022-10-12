import React, { PropsWithChildren } from "react";
import * as Style from "./VCeOferim.model";
import { CeOferimModel } from "../../models/ceOferim.model";


type Props = {
    item: CeOferimModel,
    onClick: () => void,
    state: boolean
}


export const VCeOferimView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

   


    return (
        <Style.CardDiv onClick={props.onClick}>
            <h1>{props.item.title}</h1>

            {props.state && <p>{props.item.descrition}</p>}
        </Style.CardDiv>
    )
}