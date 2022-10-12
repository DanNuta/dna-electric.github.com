import React, { PropsWithChildren, useContext } from "react";
import { NavbarType } from "../../models/navbar.model";
import { facebookIcon } from "../../icons/custom";
import Logo from "../../icons/logo/logo.svg";
import Youtube from "../../icons/social_media_icon/youtube.svg";
import * as Styled from "./Navbar.module";
import hanburgher from "../../icons/hamburger/menu.svg";
import { VButton } from "../../components/VButton/VButton";
import wishList from "../../icons/card_product_icon/wish_list.svg";
import {MobileResponsive} from "../Navbar/MobileSlide/Mobile";
import {WishlistEl} from "../../pages/Wishlist/Wishlist";
import {WishlistContext} from "../../context/Context.wishlist";
import {Wishlist} from "../../models/WislistContext.model";
import {Link} from "react-router-dom";
import navbar from "../../icons/hamburger/menu.svg";




type Props = {
  toggleState: boolean;
  toggle: () => void;
  bg: string;
  onClick: () => void;
  wishlist: boolean;
  data: NavbarType
};

export const NavbarView: React.FC<PropsWithChildren<Props>> = ( props: PropsWithChildren<Props>) => {
  

  const {wishlistState} = useContext(WishlistContext) as Wishlist;
  const checkProducts = wishlistState.length == 0 ? false : true;



  return (
    <>
    <Styled.NavbarNav display="none" bg={props.bg}>

            <Styled.NavbarUl type="center">
              <Styled.NavLi >
                <Link to="/"><img src={Logo}/></Link>
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

      </Styled.NavbarNav>




      <Styled.TabletNav display="block" bg={props.bg}>

               <Styled.TabletUl gap='1rem'>
                  <li><Link to="/"><img src={Logo} alt="wish_list"/> </Link> </li>
                  <li>9:00 - 19:00</li>
               </Styled.TabletUl>

               <Styled.TabletUl gap='1rem'>
                  <li><Link to="/">Acasa</Link></li>
                  <li><Link to={props.data.impamantare}>{props.data.impamantare}</Link></li>
                  <li><Link to={props.data.paratrasnet}>{props.data.paratrasnet}</Link></li>
                  <li><Link to={props.data.supratensiune}>{props.data.supratensiune}</Link></li>
                  <li><Link to={props.data.articole}>{props.data.articole}</Link></li>
                  <li><Link to={props.data.contacte}>{props.data.contacte}</Link></li>
               </Styled.TabletUl>


               <Styled.TabletUl gap='1rem'>
                 <li><Link to={props.data.Nr_telefon}>{props.data.Nr_telefon}</Link></li>
                 <li><Link to={props.data.Link_facebook}><img src={facebookIcon} alt="Facebook" /></Link></li>
                 <li><Link to={props.data.Link_youtube}><img src={Youtube} alt="youtube" /></Link></li>
                 <li><img src={wishList} alt="wish_list" /></li>
                 <li><img src={wishList} alt="wish_list" /></li>
               </Styled.TabletUl>

    </Styled.TabletNav>


    {<Styled.MobileNavDiv active={props.toggleState && "active"}><MobileResponsive stateCkeck={props.toggleState} toggle={props.toggle}/></Styled.MobileNavDiv>}


       {(checkProducts && <WishlistEl wishListToggle={props.wishlist} onClick={props.onClick}/>)}
    </>
  );
};
