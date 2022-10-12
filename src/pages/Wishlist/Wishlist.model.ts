import styled from "styled-components";


type Props = {
    active?: string
}

export const WishListDiv = styled.div<Props>`

background-color: rgba(39, 39, 39, 0.85);
color: white;
padding: 22px 30px;
position: absolute;
width: 100%;
z-index: 3;

transform: ${props => props.active ? "translateY(0%)" : "translateY(-200%)"};
transition: .3s ease;



.item_wishlist{
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    margin-top: 30px;
}



.btn_delete_wishlist{
    display: flex;
    justify-content: space-between;
   
}

`