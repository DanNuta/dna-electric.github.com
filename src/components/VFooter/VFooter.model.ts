import styled from "styled-components";


export const FooterDiv = styled.footer`

display: flex;
flex-direction: column;
align-items: center;

background-color: #272727;
margin-top: 45px;
color: white;
padding: 40px 0 0 0 ;



.arrow_up{
    display: none;
}


`;

export const LogoProgramDiv = styled.div`


.logo{
    display: flex;
    justify-content: center;
    img{
        width: 60%;
    }
}

ul{
    margin-top: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    li{
        display: flex;
        gap: 15px;
        align-items: center;

        img{
            width: 20%;
        }

        &:nth-child(3){
            width: 80%;

            img{
                width: 10%;
            }
        }


        
    }
}

`



export const MapsDiv = styled.div`


nav{
    display: flex;
    flex-direction: column;
    color: white;


    .links{

        display: flex;
        flex-wrap: wrap;
        gap: 15px  30px;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    
        
        li{
            text-align: center;
            width: 40%;


            a{
                color: white;
                
            }
        }
    }
    

    .social_media{
        margin: 15px 0 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        
        li{

            img{
                width: 100%;
            }


            a{
                color: white;
            }
        }
    }
}

.map{
    width: 90%;
    height: 152px;
    margin: auto;

    iframe{
        width: 100%;
        height: 100%;
        border: 0;
    }
}

`


export const FooterParaghraph = styled.p`

text-align: center;
background-color: #272727;
color: white;
padding:  2rem 0 1rem 0;

`