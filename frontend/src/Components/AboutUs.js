import React from "react";
import about1 from '../websites_images/download.jpg';
import about2 from '../websites_images/download1.png';
// import pixelImhg from '../websites_images/pexels-tirachard-kumtanom-733853.jpg';



const AboutUs = ()=>{

    return(
<>

<div class="main_head">
{/* <img src={about1} alt="Notebook" /> */}

<img style={{ width: 1349, height: 600 }} src={about1} alt="React Logo" />

  <div class="innerDiv">
     <h1> Amrutam Jewellery </h1>
     <p>Get secure, highly interactive and customized eCommerce web development solutions – to enhance your online business through our cutting-edge eCommerce website development services</p>
  </div>

</div>  



<div class="Development_heading">
    <h1> Amrutam Jewellery  and Company</h1>



<p>Get secure, highly interactive and customized eCommerce web development solutions – to enhance your online business through our cutting-edge eCommerce website development services</p>
</div> 

<div className="main-inner">
  <div className="left">
    <h1>Zero Hassle Ecommerce Store to Match Your Needs</h1>
    <p>Leverage the winning advantage for your enterprise through a robust e-commerce website that delivers top-notch buying experience. Craft a virtual store that excels in appearance and gains you high-value conversations and conversions.<br/><br/>

The secret recipe for a successful online business is a strong virtual presence that match the expectation of your users and drives them to conversion. Radixweb, as a prominent ecommerce development company, enables businesses of all kinds to build visually stunning and conversion-focused e-stores. Our team of experts know the ecommerce business in detail and have in-depth knowledge about modern development platforms. We can give your business a strong foundation and help you grow through evolution.</p>

  </div>
  <div className="right">


  <img src={about2} />



  </div>




</div>
<div className="Get_in_Touch">
  <h1>Get in Touch</h1>
    <p>Let’s discuss your project and build something extraordinary</p>

    <a href="#" class="btn btn-primary" id="start_button">Start Conversation</a>
  </div>








 


</>

           

   






   
    )
}

export default AboutUs;




