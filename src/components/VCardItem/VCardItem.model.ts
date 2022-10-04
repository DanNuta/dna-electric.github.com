import styled from "styled-components";


export const VCardItemDiv = styled.div`
    padding: 8px 11px;
    background: #F8F8F8;
    box-shadow: -2px 2px 12px -2px rgba(0,0,0,0.1);



    .img_div{
        width: 100%;
        height: 115px;
        margin-top: 5px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .title{
        font-size: 12px;
        margin: 5px 0 10px 0;
    }


    .action_btn{
        display: flex;
        gap: 10px;


        span {
            img{
                width: 15px;
            }
        }
    }

`