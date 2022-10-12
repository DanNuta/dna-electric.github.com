import { dividerClasses } from "@mui/material";
import React, { PropsWithChildren } from "react";
import {dataProductModel} from "../../models/dataProduct.model";
import * as Style from "./VCardSudare.model";
import {Grid} from  '@mui/material';


type Props = {
    data: dataProductModel[];
}


export const VCardSudareView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return <Grid container spacing={2}>



        {props.data && props.data.slice(0.4).map(item =>{
            return (<Grid item lg={3}>

                       <Style.BoxSudare>
                            <img src={item.img[0]}></img>

                               <div className="hover_Element">
                                  <img src={item.img[0]}></img>

                               </div>
                       </Style.BoxSudare>

                    </Grid>
                  )

        })}

          </Grid>
}