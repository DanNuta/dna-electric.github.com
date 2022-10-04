import React, { PropsWithChildren, useState, useEffect, useContext } from "react";
import { ImpamantareView } from "./Impamantare.view";
import {dataProductModel} from "../../models/dataProduct.model";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import {WishlistContext} from "../../context/Context.wishlist";



export const Impamantare: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{


  const {wishlistState ,setWishListState} = useContext(WishlistContext);

    const [dateState, setDataState] = useState<dataProductModel[]>([]);
    const [isPendingState, setIsPendingState] = useState<boolean | null>(null);
    const [filterActiveState, setFilterActiveState] = useState<boolean>(false);
    const [localStoregeDataState, setLocalStoregeDataState] = useState<dataProductModel[]>([]);

    useEffect(() =>{
        setIsPendingState(true);

        const ref = collection(db, "IMPAMANTARE");

        let dataDb: dataProductModel[] = [];
    
        const onSubscribe = onSnapshot(ref, (snapshopt) => {
            
          
    
          snapshopt.docs.forEach((item) => {

            dataDb.push({
                id: item.id,
                categoria: item.data().categoria,
                description: item.data().description,
                img: item.data().img,
                title: item.data().title
            })


            setDataState(dataDb);
            setIsPendingState(false)

            
          });
          
          localStorage.setItem("impamantareData", JSON.stringify(dataDb))
        });
    
        return () => {
          onSubscribe();
        };
    }, [])



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





    const addWishList = (item: dataProductModel) =>{
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


  console.log(findIndex)





      


    }




    const filterFn = () =>{
      setFilterActiveState(prev => !prev);

    }



    const filterItemFn = (category: string) =>{

      

     const newFilter = localStoregeDataState.filter((item: dataProductModel) => item.categoria === category);
      setDataState(prev =>{ return newFilter})
      setFilterActiveState(prev => !prev)
    }



   





    return <ImpamantareView filterActive={dateState.find(item => item.categoria)} localStoregeDataState={localStoregeDataState.map(item => item.categoria)} filterItemFn={filterItemFn} filterActiveState={filterActiveState} filterFn={filterFn} onClick={addWishList} data={dateState} isPending={isPendingState}>
        {props.children}
          </ImpamantareView>
}