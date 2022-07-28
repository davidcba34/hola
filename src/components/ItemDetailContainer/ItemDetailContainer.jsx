import React,{useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import vela from '../Data/data'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {
    const[data,setData]= useState({});
    const {detalleId}= useParams();
    useEffect(()=>{
        const getData = new Promise(resolve =>{
          setTimeout(()=>{
            resolve(vela);
          }, 1000);
        });

        getData.then(res =>setData(res.find(vela=>vela.id === parseInt(detalleId))));

    },[])
  return (
    <ItemDetail data= {data}/>
  )
}

export default ItemDetailContainer;