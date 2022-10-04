import React, { PropsWithChildren } from "react";
import { VFilterView } from "./VFilter.view";
import {dataProductModel} from "../../models/dataProduct.model";


type Props = {
    onClick: () => void,
    item: string,
    filterActive?: dataProductModel
}

export const VFilter: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return <VFilterView filterActive={props.filterActive}  item={props.item} onClick={props.onClick}>{props.children}</VFilterView>
}