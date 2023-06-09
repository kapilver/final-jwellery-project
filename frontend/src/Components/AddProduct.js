import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddProduct = () => {


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    var [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const addData = () => {

        setProducts([...products, { name, price, category, company }]);

        if (!name || !company || !price || !category) {
            // console.log("------------------", products)
            setError(true)
            return true;
        }

        else {

            console.log("----",);
      
         
        }
        setName("");
        setPrice("");
        setCompany("");
        setCategory("");
    }

    const collectData = async () => {
      
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log("product", products.length)
        console.log("data", name, price, category, company)
        let temp = { name, price, category, company }
        if (products.length === 0) {
            console.log("data", name, price, category, company)
            await setProducts([...products, { name, price, category, company }]);
            products.push(temp);

            if (!name || !company || !price || !category) {
                console.log("jkfkjdfdflh", products)
                setError(true)
                return true;
            }

            else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Product has been saved',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }

            console.log("products", products)
        }

        products.map(async (curr) => {
            const { name, price, company, category } = curr;

            console.log('current data---------', curr);

            let result = await fetch("http://localhost:5000/add-product", {
                method: "post",
                body: JSON.stringify({ name, price, company, category, userId }),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });

            result = await result.json();
            console.log('json result---------------', result);
        })

        navigate('/')

    }

    return (
        <>
            <div className='product'>
                <h1>Add Product</h1>
                <input className='inputbox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required />

                {error && !name && <span className="invalid_title">Enter valid name</span>}
                <input className='inputbox' required type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter your price' />
                {error && !price && <span className='invalid_title'> Enter valid price</span>}
                <input className='inputbox' type="text" required value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter your category' />
                {error && !category && <span className='invalid_title' required> Enter valid category</span>}
                <input className='inputbox' type="text" value={company} required onChange={(e) => setCompany(e.target.value)} placeholder='Enter your company' />
                {error && !company && <span className='invalid_title' required> Enter valid company</span>}

                <button className='appButton' onClick={collectData} type='button' >Add product</button>
                <button className='appButton' onClick={addData} type='button'>Save and Continure</button>

            </div>

        </>
    )

}

export default AddProduct;