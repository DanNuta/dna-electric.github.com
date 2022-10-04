import React, {useState, createContext, Children, PropsWithChildren} from "react";
import {dataProductModel} from "../models/dataProduct.model";
import {Wishlist} from "../models/WislistContext.model";




export const WishlistContext = createContext<Wishlist | null>(null);

export const WislistContext: React.FC<PropsWithChildren<dataProductModel>> = (props: PropsWithChildren<dataProductModel>) =>{

    const [wishlistState, setWishListState] = useState<dataProductModel[] | null>(null);



    return <WishlistContext.Provider value={{wishlistState, setWishListState}}>
              {props.children}
          </WishlistContext.Provider>
}

