// import { Collection } from "mongoose";
import React, { useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const VeriyfyOtp = (props) => {

    const [error, setError] = useState(false);
   
    // let location = useLocation();
    // const email = location.state.email;
    // console.log("email " + location.state.email);
    // console.log("emai--------------l " + location.state.email);
    const [verifyotp, setverifyOtp] = useState('');
    const navigate =useNavigate();
    const params = useParams();

    const collectData = async () => { 

        
        if (!verifyotp ) {
            setError(true)
            return false;
        }else{
            console.log("param", params.email);
            let result = await fetch(`http://localhost:5000/verifyOtp/${params.email}`, {

                method: 'post',
                body: JSON.stringify({verifyotp}),
                headers: {
                    'Content-type': 'application/json',
                   
                }
            });
            result = await result.json();
            console.log(result);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Otp verified successfully',
                showConfirmButton: false,
                timer: 1000
              })

            navigate(`/resetpassword/${params.email}`);
           
            
        }
    }

return (


    <div className='register'>
        <h1>Verify Otp</h1>
        <label className="lebel_rest">OTP</label>
        <input className='inputbox' type="text"  value={verifyotp}  onChange={(e) => setverifyOtp(e.target.value)}  placeholder='Enter your OTP' />

        {error && !verifyotp && <span className='invalid_title'> Enter otp </span>}


        <button className='appButton' onClick={collectData} type='button'>Verify</button>


    </div>
)


}

export default VeriyfyOtp;
