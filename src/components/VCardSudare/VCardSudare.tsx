import React, { PropsWithChildren, useContext } from "react";
import { VCardSudareView } from "./VCardSudare.view";
import {ProductsProvider} from "../../context/Context.products";
import {ProduseContextModel} from "../../models/produseContext.model"


export const VCardSudare: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const {impamantare} = useContext(ProductsProvider) as ProduseContextModel;

    return <VCardSudareView data={impamantare.data}>{props.children}</VCardSudareView>
}