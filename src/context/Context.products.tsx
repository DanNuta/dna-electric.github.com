import { FirebaseError } from "firebase/app";
import React, {useState, useEffect, createContext, PropsWithChildren} from "react";
import {getDocsFirestore} from "../hooks/useGetDocs";
import {dataProductModel} from "../models/dataProduct.model";
import {ProduseContextModel} from "../models/produseContext.model";




export const ProductsProvider = createContext<ProduseContextModel | null>(null);




export const ProductsContext: React.FC<PropsWithChildren> = ({children})  =>{


    const impamantare = getDocsFirestore("IMPAMANTARE");
    const supratensiune = getDocsFirestore("SUPRATENSIUNI");
    const paratrasnet = getDocsFirestore("PARATRASNET");


 
    return <ProductsProvider.Provider value={{impamantare, supratensiune, paratrasnet}}>
               {children}
          </ProductsProvider.Provider>

}