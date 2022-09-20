import styled from "styled-components";
import { device } from "../styles/Breackpoints";


type Props = {
    type?: string,
    bg?: string
}

export const NavbarNav = styled.nav<Props>`
  background-color: ${(props) => props.bg};
`;






export const NavbarUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;




export const NavLi = styled.li<Props>`
 // text-align: ${(props) => props.type === "center" ? "center" : ""};
  display: flex;
  justify-content: ${(props) => props.type === "center" ? 'center'  : ""};
  width: ${(props) => props.type === "center" ? "100%" : 0};
`;
