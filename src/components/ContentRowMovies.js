import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Productos en base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalCategories = {
    title:'Numero de categorías', 
    color:'success', 
    cuantity: 14,
    icon:'fa-award'
}


function ContentRowMovies(){
    
    let [productsInDB, setProductsInDB]= useState([])
    let [totalCategories, setCategoriesInDB]= useState([])
    let [totalUsers, setUsersInDB]= useState([])

    let [cartProps, setCartProps] = useState([])
    const callApiProducts = async()=>{
        try {
            const res = await fetch("https://trueque-online.herokuapp.com/products/api")
            const result = await res.json()
            console.log(result)
            return result
        } catch (error) {
            console.error("Caution, there is an error")
        }
    }
    const callApiUsers = async()=>{
        try {
            const res = await fetch("https://trueque-online.herokuapp.com/users/api")
            const result = await res.json()
            console.log(result)
            return result
        } catch (error) {
            console.error("Caution, there is an error")
        }
    }

    useEffect(async()=>{
        const products = await callApiProducts()
        const users = await callApiUsers()
        setProductsInDB(productsInDB = {
            title: 'Productos en base de datos',
            color: 'primary', 
            cuantity: products.count,
            icon: 'fa-clipboard-list'
        })
        setCategoriesInDB(totalCategories = {
            title:'Numero de categorías', 
            color:'success', 
            cuantity: Object.keys(products.categories).length,
            icon:'fa-award'
        })
        setUsersInDB(totalUsers = {
            title:'Numero de usuarios', 
            color:'secondary', 
            cuantity: users.count,
            icon:'fa-database'
        })


        setCartProps(cartProps = [productsInDB, totalCategories, totalUsers])
        
    },[])
    

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;