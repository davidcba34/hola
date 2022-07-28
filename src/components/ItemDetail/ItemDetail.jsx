import React from 'react'
import './ItemDetail.css'
export const ItemDetail = ({data}) => {
  return (
    <div className='detail-container'>
            <div className='grid-container'>
                <div className='image-container'>
                    {" "}
                    <img src={data.img}/>{" "}
                </div>
                <div className='data-container'>
                   
                    <h1>{data.nombre}</h1>
                </div>
                <div className='description-container'>

                    <p className='description'>{data.description}</p>
                    <p className='p '>{data.precio}</p>
                </div>
                <div>
                    {/* {purchaseCompleted ?(
                        <Link to ="./Item" className = "addCarrito">
                        Ir a mi carrito
                        </Link>
                         ) : (<ItemCount className= "ItemCount" onAdd={onAdd}/>
                        )
                    } */}
                </div>
            </div>


        </div>
        
  )
}
export default ItemDetail;