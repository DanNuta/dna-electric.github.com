import React, {PropsWithChildren} from "react";
import { NavbarType } from "../../models/navbar.model";
import * as Style from "./VFooter.model";
import Logo from "../../icons/logo/logo.svg";
import telefon from "../../icons/contact_icon/phone.svg";
import adress from "../../icons/contact_icon/location.svg";
import mail from "../../icons/contact_icon/email.svg";
import facebook from "../../icons/social_media_icon/facebook.svg";
import youtube from "../../icons/social_media_icon/youtube.svg";
import arrow_up from "../../icons/arrow_icon/arrow_up.svg";
import {Link} from "react-router-dom";

type Props = {
    data: NavbarType
}

export const VFooterView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    const dataYar: number= new Date().getFullYear();

    const scrollTop = () =>{
           window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    return (


        <>

        <Style.FooterDiv>


            <Style.LogoProgramDiv>

                <Link onClick={scrollTop} className="logo" to="/"><img src={Logo} alt="" /></Link>

                <ul>
                    <li>Program: 9:00 - 19:00</li>
                    <li><img src={telefon} alt="telefon" />{props.data.Nr_telefon}</li>
                    <li><img src={adress} alt="adresa" />{props.data.adresa}</li>
                    <li><img src={mail} alt="email" />{props.data.email}</li>
                </ul>
            </Style.LogoProgramDiv>


            <Style.MapsDiv>

                <nav>
                    <ul className="links">
                        <li><Link onClick={scrollTop} to="/">{props.data.Despre}</Link></li>


                        <li><Link onClick={scrollTop} to={props.data.impamantare}>{props.data.impamantare}</Link></li>
                        <li><Link onClick={scrollTop} to={props.data.paratrasnet}>{props.data.paratrasnet}</Link></li>
                        <li><Link onClick={scrollTop} to={props.data.supratensiune}>{props.data.supratensiune}</Link></li>
                    </ul>


                    <ul className="social_media">
                        <li><a href={props.data.Link_facebook} target="_blank" ><img src={facebook} alt="" /></a></li>
                        <li><a href={props.data.Link_youtube} target="_blank" ><img src={youtube} alt="" /></a></li>
                    </ul>
                </nav>


                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d87026.91056775529!2d28.848947200000005!3d47.0286336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2s!4v1663917222883!5m2!1sro!2s"   loading="lazy" ></iframe>
                </div>
            </Style.MapsDiv>


            <div className="arrow_up">
                 <img src={arrow_up} alt="" />
            </div>


            
        </Style.FooterDiv>

            <Style.FooterParaghraph>© DNA Electric {dataYar}. All rights reserved</Style.FooterParaghraph>

        </>
    )
}