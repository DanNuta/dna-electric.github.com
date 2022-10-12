import React, { PropsWithChildren } from "react";
import {LinkView} from "./VLink.view";

type Props = {
    
    link?: string,
    bg?: string,
    color?: string,
    onClick?: () => void
}


export const LinkCOmponent: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return <LinkView onClick={props.onClick} color={props.color} bg={props.bg} link={props.link}>{props.children}</LinkView>

}