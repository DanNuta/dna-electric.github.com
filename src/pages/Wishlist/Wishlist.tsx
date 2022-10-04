import React, { PropsWithChildren, useContext } from "react";
import {WishlistView} from "./Wishlist.view";
import {dataProductModel} from "../../models/dataProduct.model";
import {WishlistContext} from "../../context/Context.wishlist";




export const WishlistEl: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{



    const {wishlistState, setWishListState} = useContext(WishlistContext);

    const deleteAll = () => {
        setWishListState((prev: dataProductModel[]) =>{

            return []
        })
    }
   
    return <WishlistView onClick={deleteAll}>
        {props.children}
    </WishlistView>
}