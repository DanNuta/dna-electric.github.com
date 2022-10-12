import styled from "styled-components";


export const BoxSudare = styled.div`
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.08);
  height: 100px;
  position: relative;


  img{
    width: 100%;
  }

  .hover_Element{
    display: none;
  }

    &:hover .hover_Element{
        display: block;
        background-color: green;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        img{
            opacity: .5;
        }
    }

`