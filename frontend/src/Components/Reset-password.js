// import { Collection } from "mongoose";
import React, { useState } from "react";
import { useLocation,} from "react-router-dom";
import {  useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const ResetPassword = (props) => {

    const [error, setError] = useState(false);

    // let location = useLocation();
    // const email = location.state.email;
    // console.log("email " + location.state.email);
    // console.log("emai--------------l " + location.state.email);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const params = useParams();
    const navigate =useNavigate();

    const collectData = async () => {

        
        if (!newPassword , !confirmPassword ) {
            setError(true)
            return false;
        }

        if (newPassword !== confirmPassword) {
             alert("Passwords don't match");
        }else{
            let result = await fetch(`http://localhost:5000/updatepassword/${params.email}`, {
                method: 'post',
                body: JSON.stringify({ confirmPassword }),
                headers: {
                    'Content-type': 'application/json',
                }
            })
            result = await result.json();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password Update successfully',
                showConfirmButton: false,
                timer: 1000
              })

            navigate("/");
            console.log(result);
            
        }
    }

return (


    <div className='register'>
        <h1>Reset Password</h1>
   
        <label className="lebel_rest">New Passoword</label>
        <input className='inputbox' type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter your password' />

        {error && !newPassword && <span className='invalid_title'> Enter New Password   </span>}
        <label className="lebel_rest">Confirm Passoword</label>

        <input className='inputbox' type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />

        {error && !confirmPassword && <span className='invalid_title'> Enter confirm password  </span>}


        <button className='appButton' onClick={collectData} type='button'>Rest Passoword</button>


    </div>
)


}

export default ResetPassword;