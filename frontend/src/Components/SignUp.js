// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageFile, setImageFile] = React.useState(null);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {

        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/', { replace: true })


        }
    }
    )

    const collectData = async (e) => {
        // e.preventDefault();
        if (!name || !email || !password || !imageFile) {
            // console.log("------------------", products)
            setError(true)
            return true;
        }

        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);

        let data = {
            name: name,
            email: email,
            password: password
        }

        formData.append('data', JSON.stringify(data));
        
let token = JSON.parse(localStorage.getItem("token"))
        let result = await fetch("http://localhost:5000/register",
            {
                method: 'Post',
                headers: {
                    Authorization: token
                },

                body: formData

            })
        result = await result.json()

        if (result) {
         
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registration successfully',
                showConfirmButton: false,
                timer: 1000
            })

        }

        console.log('signupai data -----------------', result);
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));

        navigate('/', { replace: true })

    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputbox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            {error && !name && <span className='invalid_title'> Enter valid name  </span>}

            <input className='inputbox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
            {error && !email && <span className='invalid_title'> Enter valid email</span>}

            <input className='inputbox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
            {error && password.length < 3 && <span className='invalid_title'> Password is too short - should be 6 chars minimum</span>}
        
            <input className='inputbox' accept="image/*" type="file" onChange={e => setImageFile(e.target.files[0])} /><br />
            {error && !imageFile && <span className='invalid_title'> Select Profile picture</span>}
       
            <button className='appButton' onClick={collectData} type='button'>Signup</button>

        </div>
    )
}
export default SignUp;