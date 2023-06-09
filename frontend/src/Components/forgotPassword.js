import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const forgothandle = async (e) => {
        
        if (!email ) {
            setError(true)
            return false;
        }

        console.log('forgothandle-----', email);

        let result = await fetch('http://localhost:5000/Forget-password', {
            method: 'post',
            body: JSON.stringify({ email }),
            headers: {
                'Content-type': 'Application/json',
            }
        })
       result = await result.json();
        console.log('rsult login data-----------------------',  result);
        if (result.message === "Success") {
            navigate(`/verifyOtp/${email}`, {
                replace: true,
                state: {
                    email: email
                }
            })

        } else {
            alert('Please Provide Right Email');
            console.log("not exist")

            // console.log("Please Provide Right Email");
        }
    }

    return (

        <div className="forgot-password">
            <h1>Forgot Passoword</h1>

            <input type="email" className="inputbox" id="forgetemailinput" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            {error && !email && <span className='invalid_title'> Enter valid Email  </span>}

            <button type="button" className="forgotPasswordRestebutton" onClick={forgothandle}> Send OTP </button>

        </div>
    )
}

export default ForgotPassword;