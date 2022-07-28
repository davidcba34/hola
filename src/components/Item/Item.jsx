import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
// import velas from '../Data/data'
const Item =({info}) => {
  return (
      <Link to = {`/detalle/${info.id}`}>
      <img src={info.img} alt=""/>
      <p>{info.nombre}</p>
      </Link>
                        
  )
}
export default Item;