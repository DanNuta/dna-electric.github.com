import styled from "styled-components";


export const CardDiv = styled.div`
box-shadow: 4px 1px 10px 0px rgba(0,0,0,0.1);
display: flex;
align-items: center;
justify-content: center;
position: relative;


h1{
    font-size: 10px;
    text-align: center;
    padding: 28px 10px;
}


p{
position: absolute;
box-shadow: 4px 1px 10px 0px rgba(0,0,0,0.1);
top: 100%;
background-color: white;
padding: 5px;
z-index: 10;
}
`