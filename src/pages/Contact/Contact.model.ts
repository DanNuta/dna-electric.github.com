import styled, {css} from "styled-components";


type Props = {
    display?: string,
    height?: string,
    alignItems?: string,
    justifyContent?: string,
    flexDirection?: string,
    center?: string,
    gap?: string
}


const displayFlex = (props: Props) =>`
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};

`


export const ContactDiv = styled.div`
padding: 0 20px;
margin-top: 45px;

h1{
 margin-bottom: 30px;
}


p{
    margin-bottom: 20px;
}
`;


export const FormElement = styled.form`

  ${displayFlex({display: "flex",  flexDirection: 'column'})};
            
`


export const ElementInput = styled.div<Props>`

 ${(props => props.center && `${displayFlex({display: "flex", flexDirection: "column", alignItems: "center"})}` )};
`;

export const AboutUsElement = styled.div`


 ${displayFlex({height: "300px",  display: "flex", alignItems: "center"})}
 margin-top: 45px;


.about_us{
    background-color: rgba(39, 39, 39, 1);
    color: white;
    padding: 36px 20px;
    position: relative;
    width: 100%;

    h1{
        margin-bottom: 30px;
    }

    .ul_element{

        ${displayFlex({display: "flex", flexDirection: "column", gap: "15px 0"})}
        
        li{

            ${displayFlex({display: "flex", alignItems: "center", gap: "15px 10px"})}

            img{
                width: 10%;
            }
        }
    }


}

.bg_template{
    position: absolute;
    right: 20px;
    height: 300px;
    background-color: rgba(255, 214, 0, 1);
    width: 140px;
    z-index: -1;;
}`;


export const MapDiv = styled.div`

width: 100%;
margin-top: 45px;

iframe{

    width: 100%;
    border: none;
}



`