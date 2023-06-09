import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import product6  from  '../loginSideImage/Gold-chain-banner-web6.jpg';




const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {   
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });

    const handleLogin = async () => {
        console.log('---------------', email, password);

        let result = await fetch('http://localhost:5000/login', {

            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'Application/json',
            }
            //api me data send kr rhe hai
        });

        result = await result.json();
        //api se data aaya
        console.log('result json data from f-----------------------', result);

        if (result.auth) {
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1000
              })
            // localStorage.setItem('user', JSON.stringify(result));
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));

            navigate('/')

        } else {
            alert('please provide right name');
        }
    }

    const ifUserNotLoign = () => {
        navigate('/')
    }
    const forgotPasswod = () => {

        navigate('/forgotPassword')
    }

    return (

        

        <div className=' container-fluid loginMainPage'  >
            <div className="row rowineer">
            <div className="container LeftLogin" style={{"width":"50%" }}>
                <img src={product6} alt="right image" />

            </div>
            <div className="container  rightLogin" style={{"width":"50%" , "float":"Left" , "Padding":"0px!important"}} >
            <h1>Login</h1>

<input className='inputbox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />

<input className='inputbox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
{/* <a href="navigate('/')"  onClick={ifUserNotLoign} >If user not login</a><br/> */}

<div className="if_user_not_login" >
   <span className="ifUserNotRegister">If user not Register </span>
    <Link to="/SignUp"  onClick={ifUserNotLoign}>
       Sign Up
       </Link>
</div>
<div className="forgot-password">
   
    <Link to="/forgotPassword" onClick={forgotPasswod}  >
       Forgot password..?
       </Link>
</div>

{/* <button className='appButton' onClick={ifUserNotLoign} type='button'>If user not login</button> */}
<button className='appButton' onClick={handleLogin} type='button'>Login</button>
</div>

            </div>

       
          
            

            </div>
            
          

    )

}


export default Login;