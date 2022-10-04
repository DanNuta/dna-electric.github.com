import React, { PropsWithChildren, useContext } from "react";
import { VWishListItemView } from "./VWishListItem.view";
import {dataProductModel} from "../../models/dataProduct.model";
import {WishlistContext} from "../../context/Context.wishlist";


type Props = {
    data: dataProductModel
}

export const VWishListItem: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const {wishlistState, setWishListState} = useContext(WishlistContext);

    const deleteEleme = (id: string) =>{

        setWishListState((props: dataProductModel[]) => {

            const newArray = props.filter(item => item.id !== id);
            
            return newArray;
        }

            
            )

    }
    return <VWishListItemView delete={deleteEleme} data={props.data}>
              {props.children}
          </VWishListItemView>
}