

import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

li{
    list-style-type: none
}
:focus{
    outline: none !important;
    box-shadow: none;
}
ul{
    padding: 0;
    margin: 0;
}


img{
  
}

a{
    text-decoration: none;
    color: #272727;
}
`