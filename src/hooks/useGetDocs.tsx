import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DataProps } from "../models/data.model";

export function getDocsFirestore(idDB: string) {
  const [pending, setPending] = useState<boolean | null>();
  const [error, setError] = useState<string | null>(null);
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
          ...item.data(),
          title: "",
          price: "",
          data_tehnice: [],
          categoria: "",
          descriere: "",
        });
      });

      setData(dataSnapshot);
    });

    return () => {
      onSubscribe();
    };
  }, [idDB]);

  return { data, error, pending };
}
