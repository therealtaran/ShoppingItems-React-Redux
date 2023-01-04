import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SetProducts } from '../redux/actions/productActions'
import ProductComp from './productComp'
import axios from 'axios'

const ProductList = () => {
    const products=useSelector((state)=>state.allProducts.products) //to import products from store
    //no need to pass product as props as state can be accessed in any component
    const dispatch=useDispatch()
    const fetchProducts=async()=>{
      const response=await axios
      .get("https://fakestoreapi.com/products")
      .catch((err)=>{
        console.log("Error",err)
      })
      dispatch(SetProducts(response.data))
    }

    useEffect(()=>{
      fetchProducts()
    },[])
    console.log(products)
    
  return (
    <div className='ui grid container'>
      <ProductComp/>
    </div>
  )
}

export default ProductList
