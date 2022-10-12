import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { VFooterView } from "./VFooter.view";
import { NavbarType } from "../../models/navbar.model";
import {NavbarContext} from "../../context/Context.navbar";

export const VFooter:React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{


  const NavbarElement = useContext(NavbarContext) as NavbarType;



   

    return <VFooterView data={NavbarElement}>
        {props.children}
          </VFooterView>
}