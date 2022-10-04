import React, { PropsWithChildren, useEffect, useState } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { VFooterView } from "./VFooter.view";
import { NavbarType } from "../../models/navbar.model";

export const VFooter:React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{


    const [dataState, setDataState] = useState<NavbarType>({})
   

    const [isPendingState, setIsPendingState] = useState<boolean>(false);
    const [errorState, setErrorState] = useState<FirestoreError | null>(null)
    


    useEffect(() => {
        setIsPendingState(true)
        const ref = collection(db, "Navbar");
       
        const onSubscribe = onSnapshot(ref, (snapshopt) => {

        
    
          snapshopt.docs.forEach((item) => {

            setDataState({
                ...item.data()
            })

             setIsPendingState(false)
          }, (error: FirestoreError) =>{
              setErrorState(error)
              setIsPendingState(false)
          });
        });
    
        return () => {
          onSubscribe();
        };
      }, []);


    return <VFooterView data={dataState}>
        {props.children}
          </VFooterView>
}