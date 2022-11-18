import React, { useEffect } from 'react'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '../firebase/config';

export async function Globalapi() {
    try {
        const categoriesRef = collection(db, "Category");
        const q = query(categoriesRef, orderBy("createdAt", "desc"));
        onSnapshot(q, async (snapshot) => {
            const categories = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return categories;
        });
    } catch (error) {
        console.error(error);
    }

    // try {
    //     const response = await fetch('https://reactnative.dev/movies.json');
    //     const json = await response.json();
    //     return json.movies;
    // } catch (error) {
    //     console.error(error);
    // }

    // call code : Globalapi().then(setCategories);
}
