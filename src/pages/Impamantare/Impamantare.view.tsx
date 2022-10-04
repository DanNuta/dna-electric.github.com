import React, { PropsWithChildren } from "react";
import {dataProductModel} from "../../models/dataProduct.model";
import * as Styled from "./Impamantare.model";
import {Grid} from  '@mui/material';
import {VCardItemView} from "../../components/VCardItem/VCardItem.view";
import filter from "../../icons/card_product_icon/filter.svg";
import {VFilter} from "../../components/VFilter/VFilter";
import { connectFirestoreEmulator } from "firebase/firestore";
import {Route, Routes, useParams, useLocation} from "react-router-dom";
import { Products } from "../Products/Products";


type Props = {
    data: dataProductModel[],
    isPending: boolean | null,
    onClick:(item: dataProductModel) => void,
    filterFn: () => void,
    filterActiveState: boolean,
    filterItemFn: (c: string) => void,
    localStoregeDataState: string[],
    filterActive?: dataProductModel
}

export const ImpamantareView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{



    return (
        <Styled.ProductsDiv>
           <h1 className="title_page">PRODUSE SI ACCESORII</h1>



           <Styled.FilterDiv>
                <ul onClick={props.filterFn}>
                    <li><img src={filter} alt="filter" /></li>
                    <li>Filter</li>
                </ul>


            
                {props.filterActiveState && <div className="filter">
                <h1>Impamantare</h1> 
                    {props.localStoregeDataState && props.localStoregeDataState.map((item: string) => {
                        return <VFilter filterActive={props.filterActive} item={item} onClick={() => props.filterItemFn(item)}></VFilter>
                    })}
                </div>
                } 


           </Styled.FilterDiv>


            <Grid container spacing={2}> 
                    {props.isPending ? <p>Loading...</p> : props.data.map((item, index) =>{
                        return (
                           
                            <Grid xs={6} item key={index} >
                               
                                    <VCardItemView onClick={props.onClick} data={item}></VCardItemView>
                                
                            </Grid>
                           
                        )
                    })}

            </Grid>


            <Routes>
                <Route path=":id" element={<Products/>}/>
            </Routes>


        </Styled.ProductsDiv>



    )
}