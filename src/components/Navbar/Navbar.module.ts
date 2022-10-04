import styled from "styled-components";
import { device } from "../styles/Breackpoints";


type Props = {
    type?: string,
    bg?: string,
    state?: string
}

export const NavbarNav = styled.nav<Props>`
  padding: 1.5rem;
  background-color: ${(props) => props.bg};
`;


export const NavbarUl = styled.ul<Props>`
  display: flex;
  justify-content: ${(props) => props.type === "center" ? "center" : "space-between"};
  align-items: center;
`;




export const NavLi = styled.li<Props>`
 // text-align: ${(props) => props.type === "center" ? "center" : ""};
 color: white;
`;


export const MobileNavDiv = styled.div<Props>`
height: 100vh;
position: absolute;
padding: 10px 47px ;
top: 0;
bottom: 0;
right: 0;
left: 0;
backdrop-filter: blur(10px);
background-color: rgba(39, 39, 39, 0.6);

`
