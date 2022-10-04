import React, { PropsWithChildren, useState, useEffect, useContext } from "react";
import {ProductsView} from "./Products.view";
import {useParams} from "react-router-dom";
import { collection, FirestoreError, onSnapshot, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ThemeConsumer } from "styled-components";
import {WishlistContext} from "../../context/Context.wishlist";
import {dataProductModel} from "../../models/dataProduct.model";


export const Products: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const {id} = useParams();

    const {wishlistState ,setWishListState} = useContext(WishlistContext);
    const [dateState, setDataState] = useState<dataProductModel>();

    const [isPendingState, setIsPendingState] = useState<boolean | null>(null);
    const [contorState, setContorState] = useState(0);

    const [localStoregeDataState, setLocalStoregeDataState] = useState<dataProductModel[]>([]);
    

    useEffect(() =>{
        setIsPendingState(true);

        const ref = doc(db, "IMPAMANTARE", `${id}`);

        getDoc(ref)
            .then(document =>{
                setDataState({ categoria: document.data()?.categoria,
                    description: document.data()?.description,
                    id: document.id,
                    img: document.data()?.img,
                    title: document.data()?.title})
            })

            setIsPendingState(false)
        
    }, [])



    const nextImg = () =>{
        const lengthImg = dateState?.img?.length;

        
        if(lengthImg){
            
            console.log(lengthImg-1)
            if(contorState == lengthImg-1){

                setContorState(prev => {
                    return prev = 0
                })
                

            }else{
                setContorState(prev => {
                    return prev +1
                })

            }
        }  
    }
    
    
    const prevImg = () =>{


        const lengthImg = dateState?.img?.length;

        
        if(lengthImg){
            
            console.log(lengthImg-1)
            
            if(contorState == 0){

                setContorState(prev => {
                    return prev = lengthImg-1
                })
                

            }else{
                setContorState(prev => {
                    return prev -1
                })

            }
        }  

        

    }


    const wishlist = (item: dataProductModel) =>{

        const findIndex = wishlistState.findIndex((element: dataProductModel) => element.id === item.id);
  
       findIndex ? 
        setWishListState((prevState: dataProductModel[])  =>{
  
              return [...prevState, {...item}];
        })
        :
  
        setWishListState((prevState: dataProductModel[])  =>{
  
          let newArray = prevState.filter(el => el.id !== item.id)
  
          return newArray;
    })
}



useEffect(() =>{

    try{
      const localData = JSON.parse(localStorage.getItem("impamantareData") || "");
     
      setLocalStoregeDataState((prev) =>{
        
        return prev = localData;
      })



    }catch(e){
      console.log(e)
    }

  }, [localStorage.getItem("impamantareData")])



    return <ProductsView produseSimilare={localStoregeDataState && localStoregeDataState} wishlist={wishlist} prev={prevImg} contor={contorState} next={nextImg} data={dateState} isPending={isPendingState}>{props.children}</ProductsView>

}