import React from 'react'
// import velas from '../Data/data';
import Item from '../Item/Item';

const ItemList =({data=[]}) => {
  return (
    data.map(velas => <Item key={velas.id}info={velas}/> )
  )
}

export default ItemList;