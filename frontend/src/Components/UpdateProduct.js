import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('parms datata', params);
        getProductDetails();
    },[])
    const getProductDetails = async () => {
        console.log('parms datata', params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{

                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`  
            }

        });
        result = await result.json();
        console.log('get result from api-----------', result);

        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    const Updaetproduct = async() => {
        let result =await fetch(`http://localhost:5000/product/${params.id}`,{

        method: "Put",
        
        //
        body: JSON.stringify({ name,price,category,company }),
        headers: {
            "Content-Type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
        }
        });
        result =await result.json();
        console.warn(result);
        navigate('/')
    }
    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input className='inputbox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            <input className='inputbox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter your price' />
            <input className='inputbox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter your category' />
            <input className='inputbox' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter your company' />
            <button className='appButton' onClick={Updaetproduct} type='button'>Update product</button>
        </div>
    )
}
export default UpdateProduct;