import React, {useState, createContext, Children, PropsWithChildren} from "react";
import {dataProductModel} from "../models/dataProduct.model";
import {Wishlist} from "../models/WislistContext.model";
import { ElementDiv } from "../pages/Home/Personal/Personal.module";




export const WishlistContext = createContext<Wishlist | null>(null);





export const WislistContext: React.FC<PropsWithChildren<dataProductModel>> = ({children}) =>{

    const [wishlistState, setWishListState] = useState<dataProductModel[]>([]);




    const addWishList = (item: dataProductModel) =>{

       const wishListChecl = wishlistState.some(element => element.id === item.id)



       wishListChecl ?
        setWishListState(prev => {
          let newArray = prev.filter(index => index.id !== item.id);
          return newArray
        })
         : 
         setWishListState(prev =>{
          let newArray = [...prev, item];
          return newArray;
         })



         console.log(wishListChecl, "click")
    }



    return <WishlistContext.Provider value={{wishlistState, addWishList}}>
              {children}
          </WishlistContext.Provider>
}

