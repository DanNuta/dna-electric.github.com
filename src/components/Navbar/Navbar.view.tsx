import React, { PropsWithChildren, useContext } from "react";
import { NavbarType } from "../../models/navbar.model";
import { facebookIcon } from "../../icons/custom";
import Logo from "../../icons/logo/logo.png";
import Wishlist from "../../icons/card_product_icon/wish_list.svg";
import Youtube from "../../icons/social_media_icon/youtube.svg";
import * as Styled from "./Navbar.module";
import hanburgher from "../../icons/hamburger/menu.png";
import { VButton } from "../../components/VButton/VButton";
import wishList from "../../icons/card_product_icon/wish_list.svg";
import {MobileResponsive} from "../Navbar/MobileSlide/Mobile";
import {WishlistEl} from "../../pages/Wishlist/Wishlist";
import {WishlistContext} from "../../context/Context.wishlist";

type Props = {
  toggleState: boolean;
  toggle: () => void;
  bg: string;
  onClick: () => void;
  wishlist: boolean;
};

export const NavbarView: React.FC<PropsWithChildren<Props>> = ( props: PropsWithChildren<Props>) => {
  

  const {wishlistState, setWishListState} = useContext(WishlistContext);


  const checkProducts = wishlistState.length == 0 ? false : true
  return (
    <>
    <Styled.NavbarNav bg={props.bg}>

      <Styled.NavbarUl type="center">

        <Styled.NavLi >
          <a href="/">
            <img src={Logo} />
          </a>
        </Styled.NavLi> 

      </Styled.NavbarUl>  


      <Styled.NavbarUl >

        <Styled.NavLi>

          <VButton padding="0" onClick={props.toggle}>
            <img src={hanburgher} />
          </VButton>

        </Styled.NavLi>

        <Styled.NavLi>9:00 AM - 19:00 PM</Styled.NavLi>

        <Styled.NavLi onClick={props.onClick}>
          <img src={wishList}></img>
        </Styled.NavLi>

      </Styled.NavbarUl>

      {/* <Styled.NavMobile>
                  <VButton  bg="red" onClick={props.toggle} > <img src={Navbar} /> </VButton>
                  <li>9:00 - 19:00</li>
                  <li><img src={Wishlist} alt="wish_list" /></li>
               </Styled.NavMobile>

               <ul>
                  <li><a href="/acasa">{props.data.Despre}</a></li>
                  <li><a href="/impamantare">IMPAMANTARE</a></li>
                  <li><a href="/paratrasnet">PARATRASNET</a></li>
                  <li><a href="/supratensiune">SUPRATENSIUNE</a></li>
                  <li><a href="/articole">ARTICOLE</a></li>
                  <li><a href="/contacte">CONTACTE</a></li>
               </ul>


               <ul>
                 <li><a href={props.data.Nr_telefon}>{props.data.Nr_telefon}</a></li>
                 <li><a href={props.data.Link_facebook} ><img src={facebookIcon} alt="Facebook" /></a></li>
                 <li><a href={props.data.Link_youtube} ><img src={Youtube} alt="youtube" /></a></li>
                 <li><img src={Wishlist} alt="wish_list" /></li>
               </ul> */}
    </Styled.NavbarNav>


    {props.toggleState && <Styled.MobileNavDiv><MobileResponsive stateCkeck={props.toggleState} toggle={props.toggle}/></Styled.MobileNavDiv>}


       {props.wishlist && (checkProducts && <WishlistEl/>)}
    </>
  );
};
