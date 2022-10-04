import React, { PropsWithChildren, useContext } from "react";
import * as Style from "./Wishlist.model";
import {WishlistContext} from "../../context/Context.wishlist";
import {dataProductModel} from "../../models/dataProduct.model";
import { VButton } from "../../components/VButton/VButton";
import { VWishListItem } from "../../components/VWishlistItem/VWishListItem";


type Props = {
    onClick: () => void
}


export const WishlistView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const {wishlistState, setWishListState} = useContext(WishlistContext);


    console.log(wishlistState, "Element")

    return <Style.WishListDiv>
        
            <div className="btn_delete_wishlist">
                    <h1>Preferinte</h1>
                    <VButton onClick={props.onClick} color="white" bg="#272727">Sterge</VButton>
            </div>

           

           <div className="item_wishlist">

            {wishlistState.map((item: dataProductModel, index: number) => {

                return (<VWishListItem data={item}></VWishListItem>)
            })}

           </div>



          </Style.WishListDiv>
}