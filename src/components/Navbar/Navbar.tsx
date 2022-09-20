import React, {PropsWithChildren} from "react";


import { NavbarView } from "./Navbar.view";

import { useState, useEffect } from "react";
import { NavbarType } from "../../models/navbar.model";

import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";



type Props = {
    bg: string
}



export const Navbar: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    const [data, setData] = useState<NavbarType>({
        Despre: "",
        Produse: "",
        Link_facebook: "",
        Link_youtube: "",
        Nr_telefon: "",
        Servicii: ""
    })

    const [toggleState, setToggleState] = useState<boolean>(false)


    useEffect(() =>{
        const ref = collection(db, "Navbar");

        const onSubscribe = onSnapshot(ref, (snapshopt) =>{

            //let navbar: NavbarType = ;

            snapshopt.docs.forEach(item =>{
                setData(item.data())
            })

            
        })

        return () => {onSubscribe()}

    }, [])



    const checkToggleFn = () =>{
        setToggleState(!toggleState)
    }

    return <NavbarView bg={props.bg}  data={data} toggle={checkToggleFn}>
              {props.children}
          </NavbarView>
}