import React, { PropsWithChildren, useContext } from "react";
import * as Style from "./Home.model";
import {HomeProps} from "../../../models/home.model";
import { FirebaseError } from "firebase/app";
import { VButton } from "../../../components/VButton/VButton";
import {NavbarContext} from "../../../context/Context.navbar";


type Props = {
    data: HomeProps,
    error: FirebaseError | null,
    isPending: boolean
}


export const HomeView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const contextNavbar = useContext(NavbarContext)
    console.log(contextNavbar, "COntext")
    return (

        <Style.HeaderDiv>

          {props.isPending ? <p>loading</p> :

                <>
                <Style.HeadersDivText>
                       <h1>{props.data.title}</h1> 
                       <p>{props.data.description}</p>    
                </Style.HeadersDivText>

                <Style.HeaderDivImg>
                    <img src={props.data.image} alt="" />
                    <VButton bg="##272727"><a href={contextNavbar?.contacte}>Contacteaza-ne</a></VButton>
                </Style.HeaderDivImg>

                </>
          
          }
        </Style.HeaderDiv>

    )

}