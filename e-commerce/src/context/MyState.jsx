/* eslint-disable react/prop-types */

import myContext from './MyContext';
import { useState,useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../firebase/firebaseConfig';
const MyState = ({children}) => {

    const [loading,setLoading]=useState(false)
    const [getAllProduct,setGetAllProduct]=useState([]);
    const getAllProductFunction=async()=>{
 setLoading(true);
 try{
    const q = query(
        collection(fireDB, "products"),
        orderBy('time')
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
            productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
    });
    return () => data;
 }catch(error){
    console.log(error);
 }
    }
    useEffect(() => {
        getAllProductFunction();
    }, []);
    return (
        <myContext.Provider value={{
            loading,setLoading,getAllProduct, getAllProductFunction
        }}>
            {children}
        </myContext.Provider>
    );
};

export default MyState;