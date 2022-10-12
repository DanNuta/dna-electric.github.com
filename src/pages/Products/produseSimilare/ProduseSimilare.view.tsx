import React, {useContext} from "react";
import {Grid} from '@mui/material';
import {VCardItem} from "../../../components/VCardItem/VCardItem";
import {WishlistContext} from "../../../context/Context.wishlist";
import {Wishlist} from "../../../models/WislistContext.model";
import {dataProductModel} from "../../../models/dataProduct.model";
import * as Style from "./ProduseSimilare.module";
import {Link, Outlet, useNavigate, useParams, useLocation} from "react-router-dom";




type Props = {
    data?: dataProductModel[],
    link?: string

}



export const ProduseSimilare: React.FC<Props> = (props: Props) =>{

   

    

    const location = useLocation();
    const path = location.pathname = "";

   


    const {addWishList} = useContext(WishlistContext) as Wishlist;

    return ( 

        <>
 
        {props.data && props.data.slice(0, 4).map((item, i) =>{

         
       return  <Grid xs={6} md={3} key={i} item>
          
                {/* <VCardItem onClick={() => addWishList(item)} data={item}></VCardItem> */}

                <Link to={`${path}/${props.link}/${item.id}`}>

                <Style.ProduseSimilareDiv>

                    <div className="img">
                       <img src={item.img[0]}/>
                    </div>

                    <div className="text_hover">
                        <div className="desc">
                            <p>{item.title.substring(0, 25)}...</p>
                        </div>

                        <div onClick={() => addWishList(item)} className="hover">
                            <h1>In preferinte</h1>
                        </div>
                    </div>

                </Style.ProduseSimilareDiv>
                </Link>

            
        </Grid>


    })}


<Outlet />  
</>)

}