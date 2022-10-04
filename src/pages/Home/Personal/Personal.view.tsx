import React, {PropsWithChildren, useContext} from "react";
import * as Style from "./Personal.module";
import { PersonalModel } from "../../../models/personal.model";
import {VPersonal} from "../../../components/VPersonal/VPersonal";
import {VButton} from "../../../components/VButton/VButton";
import star from "../../../icons/personal/star.svg";
import people from "../../../icons/personal/personal.svg";
import dolar from "../../../icons/personal/dolar.svg";
import {NavbarContext} from "../../../context/Context.navbar";

type Props = {
    data: PersonalModel[];
   contact: {
        img?: string,
        contact?: string
}
}

export const PersonalView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props> ) =>{


    const contextNavbar = useContext(NavbarContext);

    return (
        <Style.ElementDiv margin="45px">

            <Style.ElementDiv>

            </Style.ElementDiv>


            <Style.PersonalDiv>
                {props.data && props.data.map(item => {
                    return <VPersonal  data={item} />
                })}


                <VButton bg="#272727"><a href={contextNavbar?.contacte}>{props.contact.contact}</a></VButton>
            </Style.PersonalDiv>

        </Style.ElementDiv>
    )
}