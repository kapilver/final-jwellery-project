import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';



const Nav = () => {
    const auth = localStorage.getItem('user');
    console.log("clik logout function", auth);
    const navigate = useNavigate();
    const logout = () => {

        localStorage.clear();
        navigate('/SignUp');
    }

    return (
        <div className='navBar'>

<img  src="//cdn.shopify.com/s/files/1/0637/7835/7500/files/g10_5_75x.png?v=1652265876" className='logo' alt="logo" />

            { auth ? <ul className='Nav-ul'>
                <li className='nav-item'><Link to="/">Products</Link></li>
                <li className='nav-item'><Link to="/add-product"> Add Products</Link></li>
  
                <li className='nav-item'><Link onClick={logout} to="/login"> Logout ( { JSON.parse(auth).name } )
                 </Link> </li>
                 <li className='nav-item'><Link to="/AboutUs"> About Us</Link></li>

                 <img src={'https://profileimagess.s3.ap-south-1.amazonaws.com/'+JSON.parse(auth).image} width= {70} height={70} className='profileimage' />

            </ul> :

                <ul className='Nav-ul Nav-right hidelinkcolor' id='hidelinkcolor'>

                    <li><Link to="/login"><Icon icon="ep:back"  className='back_icon' /></Link></li>
                </ul>
            }
        </div>
    )
}


export default Nav;