import styled from "styled-components";


type Props = {
    margin?: string
}

export const ElementDiv = styled.div<Props>`

margin-top: ${props => props.margin ? props.margin : 0}

`;


export const PersonalDiv = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


`