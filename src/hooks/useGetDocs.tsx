import { db } from "../firebase/config";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DataProps } from "../models/data.model";



export function getDocsFirestore(idDB: string) { 

  const [pending, setPending] = useState<boolean | null>();
  const [error, setError] = useState<FirestoreError | null>(null);
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const ref = collection(db, idDB);

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      setError(null);
      setPending(true);
      
      let dataSnapshot: DataProps[] = [];

      snapshopt.docs.forEach((item) => {
         dataSnapshot.push({
           id: item.id,
           title: item.data().title,
           price: item.data().price,
           categoria: item.data().categoria,
           descriere: item.data().descriere
         });
      });

      setData(dataSnapshot);

    }, (error) =>{
        setError(error)
        setPending(false)
    });

    return () => {
      onSubscribe();
    };
  }, [idDB]);



  return { data, error, pending };
}
