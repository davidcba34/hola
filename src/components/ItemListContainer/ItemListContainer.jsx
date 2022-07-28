import React,{useEffect, useState} from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import velas from '../Data/data'
import {useParams} from 'react-router-dom'
export const ItemListContainer =({texto})=> {
  const [data,setData] = useState([]);

  const {categoriaId}= useParams();



    useEffect(()=>{
        const getData = new Promise(resolve =>{
          setTimeout(()=>{
            resolve(velas);
          }, 1000);
        });
        if(categoriaId){
          getData.then(res =>setData(res.filter(velas=>velas.category === categoriaId)));
        }else{

          getData.then(res =>setData(res));
        }

    },[categoriaId])
    const onAdd=(quantity)=>{
        console.log(`compraste ${quantity } unidades`)        
    }
  return (
    <>
    <Title greeting ={texto} />
    <ItemCount initial ={1} stock ={5} onAdd={onAdd}/>
    <ItemList data ={data}/>
    </>
  )
}
export default ItemListContainer;