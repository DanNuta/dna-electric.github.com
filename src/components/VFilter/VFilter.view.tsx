import React, { PropsWithChildren } from "react";
import * as Style from "./VFilter.model";
import {dataProductModel} from "../../models/dataProduct.model";

type Props = {
    onClick: () => void,
    item: string,
    filterActive?: dataProductModel
}


export const VFilterView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{



    return <Style.FilterElement onClick={props.onClick}>

            <Style.BoxCheckDiv display={props.filterActive?.categoria === props.item ? "block" : "none"} >
                        <div className="active"></div>
                    </Style.BoxCheckDiv>


                    <p>{props.item}</p>
          </Style.FilterElement>
}