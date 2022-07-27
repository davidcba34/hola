import React from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
export const ItemListContainer =({texto})=> {


    const onAdd=(quantity)=>{
        console.log(`compraste ${quantity } unidades`)        
    }
  return (
    <>
    <Title greeting ={texto} />
    <ItemCount initial ={1} stock ={5} onAdd={onAdd}/>
    <ItemList/>
    </>
  )
}
export default ItemListContainer;