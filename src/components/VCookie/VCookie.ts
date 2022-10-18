import styled from "styled-components";
import {displayFlex, rootColor, theme} from "../styles/Theme";

type Props = {
    scroll?: number
}

export const CookieBG = styled.div<Props>`

position: absolute;
top: ${props => props.scroll+"px"};
backdrop-filter: blur(13.5px);
width: 100%;
height: 100vh;
z-index: 999;
${displayFlex({display: "flex", 
              justifyContent: 'center',
              alignItems: "center" })}

`


export const Cookie = styled.div`
background-color: ${rootColor.secondary};
color: white;
padding: 40px 28px;
width: 85%;
text-align: center;

${theme.breakpoints.up("lg")}{
    width: 700px;
    padding: 70px 100px;
}

h1{
    font-size: 20px;

    ${theme.breakpoints.up("lg")}{
        font-size: 30px;
    }
}

p{
    padding: 10px 0 25px 0;
    font-size: 12px;
    line-height: 16px;

    ${theme.breakpoints.up("lg")}{
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        padding: 20px 0 45px 0;
    }
}


a{
    color: ${rootColor.primary};
}


img{
   ${theme.breakpoints.up("lg")}{
    width: 30%;
   }
}



`