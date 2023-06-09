import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ProductsList =()=>{
const [products , setProducts] = useState([]);

useEffect(()=>{
    getProducts();
},[])


const getProducts = async ()=>{

let result = await fetch('http://localhost:5000/products',{
headers:{

    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`  
}

});
  result =await result.json();
  setProducts(result);
}

// console.log('products------',products);

const deleteProduct = async(id)=>{
    // console.log(id);

     let result = await fetch(`http://localhost:5000/product/${id}`,{
        method: "Delete"  ,
          headers:{

            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`  
        }
        

    });

      result = await result.json()

      if(result){
        getProducts();
      }

 }

 const searchhandle= async (event)=>{

    console.log(event.target.value);
    let key  = event.target.value;
    if(key){

        let result = await fetch(`http://localhost:5000/search/${key}`,{
            headers:{

        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`  
    }}
    );

        result = await result.json();
        if(result){
    
            setProducts(result);
    
        }


    }else{
        getProducts();
    }
 }
    return(
        <div className='products-list'>
            <h1>Products list</h1>
            <input className='search-product-box' type="text" placeholder='Search Your Products'
            onChange={searchhandle}/> 
            <ul className='products-heading'>
                <li>s.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
{
       products.length>0 ? products.map((item , index)=>
        <ul key={item._id}>

            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            {/* <li>{<button onClick={deleteProduct(item._id)}>Delete</button>}</li> */}
            <li>
            {/* <button className='delete_btn' onClick={()=>deleteProduct(item._id)} >Delete</button> */}
           <button className='update-button'><Icon icon="material-symbols:delete-outline" onClick={()=>deleteProduct(item._id)} /></button> 



            <button className='update-button'><Link to={"/update/"+item._id}><Icon icon="material-symbols:edit-outline"/>
</Link></button>
         </li>
               
        </ul>
        )

        :<h1 className='no_result'>NO RESULT FOUND</h1>



}
    


        </div>
    )
}

export default ProductsList;