import styled from "styled-components";


export const WishlistItemDiv = styled.div`

display: flex;
background-color: white;
justify-content: space-between;
height: 85px;
gap: 20px;
padding: 0 10px 0 0;

.img_title{
    display: flex;
    height: 100%;
    gap: 10px;

    .img_wl{
        height: 100%;
        width: 120px;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


    .title{

        h4{
            padding-top: 13px;
        }
    }
}


.cancel{
    padding-top: 13px;
    font-size: 34px;
}



`