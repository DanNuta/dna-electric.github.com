import {db} from "../firebase/config";
import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore";
import {getDocsFirestore} from "../hooks/useGetDocs";



export function Home(){

    const {data, error, pending} = getDocsFirestore("ProductsID");

    console.log(data, error, pending)


   

   


    return <h1>Home</h1>
}