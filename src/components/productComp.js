import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductComp = () => {
  const products=useSelector((state)=>state.allProducts.products) //to import products from store
  //no need to pass product as props as state can be accessed in any component
  const renderList=products.map((products)=>{
    const {id,title,image,price,category}=products
    return(
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>
    <div className='ui link cards'>
      <div className='card'>
        <div className='image'>
          <img src={image} alt={title}></img>
        </div>
          <div className='content'>
            <div className='header'>{title}</div>
            <div className='meta price'>{price}</div>
            <div className='meta'>{category}</div>            
        </div>
      </div>
    </div>
    </Link>
  </div>
    )
  })
  return (
    <>
      {renderList}
    </>
  )
}

export default ProductComp