import styled from "styled-components";


type Props = {
    display?: string
}

export const FilterElement = styled.div<Props>`


display: flex;
align-items: center;
gap: 15px;
padding-left: 20px;



    .active{
        background: yellow;
        border-radius: 2px;
        display: ${props => props.display};

    }

`;


export const BoxCheckDiv = styled.div<Props>`
    width: 14px;
    height: 14px;
    border-radius: 2px;
    border: 1px solid rgba(39, 39, 39, 1);
    padding: 2px;
    

    .active{
        display: ${props => props.display};
        background-color: rgba(255, 214, 0, 1);
        height: 100%;
        width: 100%;
    }



`