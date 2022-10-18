import React, { useEffect, useState } from "react";
import axios from "axios";


const Api = () =>{
 
    const [data,setdata] = useState([])

    const obj = [{
        title: "Honda car",
        price: "$5000",
        category : "Car",
        image:"https://www.honda.com.pk/images/landingimages/images/city/city1.5.png",
        id: new Date().getTime().toString()

    }]


    useEffect(() => {
       axios({
        method: "GET",
        url: "https://fakestoreapi.com/products"
       }).then(res => {
        setdata(res.data)
       }).catch(error => {
        console.log(error)
       })

    }, [] )

    useEffect(() => {
        axios({
         method: "POST",
         url: "https://fakestoreapi.com/products",
         title: "Honda car",
         price: "$5000",
        category : "Car",
        image:"https://www.honda.com.pk/images/landingimages/images/city/city1.5.png",
        id: new Date().getTime().toString()
        }).then(res => {
         console.log(res.data)
        }).catch(error => {
         console.log(error)
        })
 
     }, [] )
 
 
   
    return(
    <div className="show">
   
   {data.map((e,i) =>{
    return(
        <div className="border" key={i}>
            <img src={e.image} width="100px"></img>
            <p>{e.title}</p>
            <p>{e.price}</p>
            <p>{e.category}</p>
            <p>{e.rate}</p>
        </div>
    )
   })}
    
    
    
    
    </div>
    )
}

export default Api;