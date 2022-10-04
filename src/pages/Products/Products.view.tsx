import React, { PropsWithChildren, useContext } from "react";
import * as Style from "./Products.model";
import {VButton} from "../../components/VButton/VButton";
import wishlist from "../../icons/hover_icon/wish_list.svg";
import wishlistHover from "../../icons/card_product_icon/wishlistHover.svg";
import {WishlistContext} from "../../context/Context.wishlist";
import {dataProductModel} from "../../models/dataProduct.model";
import shop from "../../icons/card_product_icon/shop.svg";
import {Grid} from '@mui/material';
import {Link} from "react-router-dom";
import {VCardItem} from '../../components/VCardItem/VCardItem';
import like from "../../icons/calitate/like.svg";
import calitate from "../../icons/calitate/calitate.svg";
import garantie from "../../icons/calitate/garantie.svg";



type Props = {
    data?: dataProductModel,
    isPending: boolean | null,
    next: () => void,
    prev: () => void,
    contor: number,
    wishlist: (e: dataProductModel) => void,
    produseSimilare: dataProductModel[]

}
export const ProductsView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const {wishlistState ,setWishListState} = useContext(WishlistContext);

 


    const checkItExist = wishlistState.findIndex((item:dataProductModel) => item.id === props.data?.id);
    
    
    

    return <div>



          {props.isPending ? <p>Loading...</p> :


            <Style.ItemProductsDiv>

                <h1 className="title">{props.data?.title}</h1>

            <Style.ImgSlider>
                <img src={props.data && props?.data?.img?.[props.contor]} alt="" />

                <div className="btn">
                    <button onClick={props.prev} className="prev">prev</button>
                    <button onClick={props.next} className="next">next</button>
                </div>
            </Style.ImgSlider>


            <Style.InfoDiv>

                <Style.DescriereDiv>
                    <h3>Descriere</h3>
                    <p>{props.data?.description?.[0]}</p>
                    <hr />
                </Style.DescriereDiv>


                <Style.ContactShoWishlistDiv>

                    <VButton color="rgba(39, 39, 39, 1)" bg="rgba(255, 214, 0, 1)"><a href="/">Contactează-ne</a></VButton>

                    <ul>
                        <li><img src={shop} alt="shop"/>Adauga in cos</li>
                        <li onClick={() => props.wishlist(props.data)}><img src={checkItExist ? wishlistHover : wishlist} alt="wishlist" />Adauga in la favorite</li>
                    </ul>

                </Style.ContactShoWishlistDiv>

            </Style.InfoDiv>

            </Style.ItemProductsDiv>

          
          }



          
          <Style.ProduseSimilareDiv>
            <h1 className="title">PRODUSE SIMILARE</h1>


            <Grid container spacing={2}> 
                {props.produseSimilare && props.produseSimilare.slice(0, 4).map((item, i) =>{
                    return <Grid xs={6} item>
                      
                            <VCardItem onClick={() => props.wishlist(item)} data={item}></VCardItem>
                        
                    </Grid>
                })}
            </Grid>


          </Style.ProduseSimilareDiv>



          <Grid  container spacing={3}>

            <Grid xs={12}item>
                <Style.CalitateDiv>
                    <img src={calitate} alt="calitate" />
                    <h5>Calitate inalta</h5>
                    <p>Paratrasnetul nostru protejeaza de la cele mai mari tensiuni</p>
                </Style.CalitateDiv>
            </Grid>

            <Grid xs={12} item>
                <Style.CalitateDiv>
                    <img src={like} alt="calitate" />
                    <h5>Protectie exceptionala</h5>
                    <p>Paratrasnetul nostru protejeaza de la cele mai mari tensiuni</p>
                </Style.CalitateDiv>
            </Grid>


            <Grid xs={12} item>
                <Style.CalitateDiv>
                    <img src={garantie} alt="calitate" />
                    <h5>Garantie de lunga durata</h5>
                    <p>Paratrasnetul nostru protejeaza de la cele mai mari tensiuni</p>
                </Style.CalitateDiv>
            </Grid>


          </Grid>





    </div>
}