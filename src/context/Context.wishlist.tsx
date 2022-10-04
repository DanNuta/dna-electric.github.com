import React, {useState, createContext, Children, PropsWithChildren} from "react";
import {dataProductModel} from "../models/dataProduct.model";

export const WishlistContext = createContext<dataProductModel | null>(null);



export const WislistContext: React.FC<PropsWithChildren<dataProductModel>> = (props: PropsWithChildren<dataProductModel>) =>{

    const [wishlistState, setWishListState] = useState<dataProductModel[]>([])

    return <WishlistContext.Provider value={{wishlistState, setWishListState}}>
              {props.children}
          </WishlistContext.Provider>
}

