import styled from "styled-components";
import {device} from "../styles/Breackpoints"

type ButtonProps ={
    bg : string;
}

export const  Button = styled.button<ButtonProps>`

 background-color: ${(props: ButtonProps) => props.bg};


 @media ${device.laptop} {
    display: none
 }
`


