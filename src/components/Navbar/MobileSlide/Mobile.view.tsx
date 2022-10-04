import * as Style from "../MobileSlide/Mobile.module";
import React, { PropsWithChildren, useContext } from "react";
import Cancel from "../../../icons/card_product_icon/cancel_mobile.svg";
import {VButton } from "../../VButton/VButton";
import facebook from "../../../icons/social_media_icon/facebook.svg";
import youtube from "../../../icons/social_media_icon/youtube.svg";
import wishlist from "../../../icons/social_media_icon/wish_list.svg";
import {NavbarContext} from "../../../context/Context.navbar";




type Props = {
    toggle: () => void,
    state: boolean
}


export const MobileResponsiveView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const contectNav = useContext(NavbarContext)

    return (

        <Style.MobileStyled state={props.state}>

            <Style.MobileLi type="right">
                 <VButton onClick={props.toggle}><img src={Cancel}/></VButton>
            </Style.MobileLi>


            <Style.MolobleUl>
                <Style.MobileLiElement><a href={contectNav?.Despre}>{contectNav?.Despre}</a></Style.MobileLiElement>
                <Style.MobileLiElement><a href={contectNav?.impamantare}>{contectNav?.impamantare}</a></Style.MobileLiElement>
                <Style.MobileLiElement><a href={contectNav?.paratrasnet}>{contectNav?.paratrasnet}</a></Style.MobileLiElement>
                <Style.MobileLiElement><a href={contectNav?.supratensiune}>{contectNav?.supratensiune}</a></Style.MobileLiElement>
                <Style.MobileLiElement><a href={contectNav?.articole}>{contectNav?.articole}</a></Style.MobileLiElement>
                <Style.MobileLiElement><a href={contectNav?.contacte}>{contectNav?.contacte}</a></Style.MobileLiElement>
            </Style.MolobleUl>


            <Style.MolobleUl>
                <Style.MobileDiv>
                    <Style.MobileLiElement><a href={contectNav?.Link_facebook} target="_blank"><img src={facebook} alt="facebook" /></a></Style.MobileLiElement>
                    <Style.MobileLiElement><a href={contectNav?.Link_youtube} target="_blank"><img src={youtube} alt="Youtube" /></a></Style.MobileLiElement>
                    <Style.MobileLiElement><img src={wishlist}/></Style.MobileLiElement>
                </Style.MobileDiv>

                <Style.MobileLiElement color="yolow">Program: 9:00 AM - 19:00 PM</Style.MobileLiElement>
                <Style.MobileLiElement color="yolow">{contectNav?.Nr_telefon}</Style.MobileLiElement>
            </Style.MolobleUl>


        </Style.MobileStyled>
    )

}