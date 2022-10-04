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


// style css


const FlexFn = (props: Props) =>`
    ${props.display && `display: ${props.display}`};
    ${props.alignItems && `align-items: ${props.alignItems}`} ;
    ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
    ${props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${props.gap && `gap: ${props.gap}`};

`

export const ItemProductsDiv = styled.div`

width: 90%;
margin:45px  auto 0 auto;

`;




export const ImgSlider = styled.div`
    background-color: #F8F8F8;
    box-shadow: -2px 2px 12px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    height: 280px;
    margin: 20px 0;

    img{
        position: absolute;
        height: 100%;
    }

    .btn{
        
        z-index: 10;
        position: relative;
        height: 100%;
        ${FlexFn({display: "flex", alignItems: "center"})}

        .prev{
            
        }


        .next{
            position: absolute;
            right: 0;
            z-index: -10;
            

        }
    }
`

export const InfoDiv = styled.div`

`;



export const DescriereDiv = styled.div`
   p{
    margin: 10px 0 20px 0;
   }
`;


export const ContactShoWishlistDiv = styled.div`

    margin-top: 20px;
   ${FlexFn({display: "flex", flexDirection: "column"})}
    

    ul{

        ${FlexFn({display: "flex", justifyContent: "space-between"})}

        margin-top: 20px;
        li{
            display: flex;

            ${FlexFn({display: "flex", alignItems: "center", gap: "5px"})}

            img{
                width: 15px;
            }
        }
    }
`;



export const ProduseSimilareDiv = styled.div`
width: 90%;
margin: 45px  auto ;


.title{
    margin-bottom: 30px;
}
`;


 

export const CalitateDiv = styled.div`


width: 90%;
margin: auto;
border: 1px solid rgba(39, 39, 39, .1);
text-align: center;
padding: 20px 16px;


img{
    width: 60%;
    margin-bottom: 25px;
}

h5{
    margin-bottom: 10px;
}



`

