import React, {PropsWithChildren, useContext, useRef, useState} from "react";
import * as Style from "./Contact.model"
import { VImput } from "../../components/VInput/VInput";
import { VButton } from "../../components/VButton/VButton";
import location from "../../icons/contact_icon/location.svg";
import mail from "../../icons/contact_icon/email.svg";
import phone from "../../icons/contact_icon/phone.svg";
import {NavbarContext} from "../../context/Context.navbar";
import {StateFormModel} from "../../models/stateForm.model";




type Props = {
    onChangeName: (e: React.FormEvent<HTMLInputElement>) => void,
    onChangeEmail: (e: React.FormEvent<HTMLInputElement>) => void,
    onChangeTel: (e: React.FormEvent<HTMLInputElement>) => void,
    onChangeMsj: (e: React.FormEvent<HTMLInputElement>) => void,
    nameState: StateFormModel,
    emailState: StateFormModel,
    telState: StateFormModel,
    msjState: StateFormModel,
    contact: (e:  Event, form: HTMLFormElement) => void,
    isPendingState: boolean | null;
}

export const ContactViwe: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    const form = useRef<HTMLFormElement>(null);

    

   const contextNavbar = useContext(NavbarContext);
   

    return (
        <Style.ContactDiv>

            <h1>Contact</h1>
            <p>Simțiți-vă liber să ne contactați oricând. Vom reveni cu un mesaj cât mai curând posibil!</p>

            {/* (e: Event, form: HTMLFormElement) => props.contact(e, form) */}


            <Style.FormElement ref={form}  onSubmit={() => {console.log("salut")}}>

                <Style.ElementInput >
                    <h1>Trimite-ne un mesaj</h1>

                    <VImput nameState={props.nameState} type="text" label="Nume" placeholder="Ignatiuc Anastasia" onChange={props.onChangeName}/>
                    <VImput nameState={props.emailState} type="email" label="Email" placeholder="ignatiucanastasia@gmail.com" onChange={props.onChangeEmail}/>
                    <VImput nameState={props.telState} type="tel" label="Telefon" placeholder="+37369744487" onChange={props.onChangeTel}/>

                </Style.ElementInput>


                <Style.ElementInput center="center">

                    <VImput nameState={props.msjState}  type="textarea" label="Mesaj" placeholder="Scrie un mesaj" onChange={props.onChangeMsj}/>
                    <VButton  bg="rgba(255, 214, 0, 1)">{props.isPendingState ? "Sending..." : "Contacteaza-ne"}</VButton>


                </Style.ElementInput>


                <Style.AboutUsElement>

                    <div className="about_us">
                        <h1>Despre noi</h1>

                        <ul className="ul_element">
                            <li><img src={phone} alt="telefon"/>{contextNavbar?.Nr_telefon}</li>
                            <li><img src={location} alt="telefon"/>{contextNavbar?.adresa}</li>
                            <li><img src={mail} alt="telefon"/>{contextNavbar?.email}</li>
                        </ul>
                    </div>
                    
                <div className="bg_template"></div>
                </Style.AboutUsElement>



            </Style.FormElement>


            <Style.MapDiv>
                <iframe src={contextNavbar?.map}></iframe>
            </Style.MapDiv>



        </Style.ContactDiv>
    )
}