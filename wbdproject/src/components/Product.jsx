import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Productcard from './Productcard'
import styles from '../components/Product.module.css'
import { BaseUrl } from '../App'

function Product() {
    const [Products,setProducts]=useState([])

    useEffect(()=>{
        getdata()
    },[])
    const getdata = ()=>{
        axios.get(`${BaseUrl}/products`)
        .then(({data})=>{
            console.log(data);
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className={styles.container}>
        {Products.map((elem)=>{
            return <Productcard key={elem.id} {...elem}/>
        })}
    </div>
  )
}

export default Product