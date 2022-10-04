import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import {NavbarType} from "../models/navbar.model";


import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";




export const NavbarContext = createContext<NavbarType | null>(null);




export const NavbarProvider: React.FC<PropsWithChildren<NavbarType>> = (props: PropsWithChildren<NavbarType>) =>{


    const [data, setData] = useState<NavbarType>({});


    useEffect(() => {
        const ref = collection(db, "Navbar");
    
        const onSubscribe = onSnapshot(ref, (snapshopt) => {
          //let navbar: NavbarType = ;
    
          snapshopt.docs.forEach((item) => {
            setData(item.data());
          });
        });
    
        return () => {
          onSubscribe();
        };
      }, []);

    return  (
            <NavbarContext.Provider value={data}>
                {props.children}
            </NavbarContext.Provider>

            )

}