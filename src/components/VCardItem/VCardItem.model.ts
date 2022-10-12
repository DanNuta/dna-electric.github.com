import styled from "styled-components";


export const VCardItemDiv = styled.div`
    padding: 8px 11px;
    background: #F8F8F8;
    box-shadow: -2px 2px 12px -2px rgba(0,0,0,0.1);

    .img_div{
        width: 100%;
        height: 115px;
        margin-top: 5px;
        display: flex;
        justify-content: center;


        img{
            
            height: 100%;
            object-fit: cover;
        }
    }

   .title_shop{
      display: flex;
      flex-direction: column;
      height: 100px;
      
     

       .title{
           font-size: 12px;
           margin: 5px 0 10px 0;
       }
    
    
       .action_btn{
           display: flex;
           align-items: flex-end;
           gap: 10px;
           height: 100%;
    
    
           span {
            cursor: pointer;
               img{
                   width: 15px;
               }
           }
       }

   }


`