import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import product2  from  '../websites_images/jwelleryImage/p2.png';
import product3  from  '../websites_images/jwelleryImage/p4.png';
import product4  from  '../websites_images/jwelleryImage/p5.png';
import product6  from  '../websites_images/jwelleryImage/p6.png';



const Blogs = () => {

    return (

        <>


        

        <h1 style={{textAlign: 'center'}}>Online Jewellery Blog</h1>
        
            <div class="container_blog">
                <div class="d-lg-flex">
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div> <div class="pic">
                            <img class="" src={product2} alt="" />
                            <div class="date">
                                <span class="day">5</span>
                                <span class="month">may</span>
                                <span class="year">2023</span>
                            </div> </div> <div class="content">
                            <p class="h-1 mt-4">
<span style={{color:"red"}}>  Dimensions </span><br/> Width - 1.85 mm

Height - 1.85 mm

C Length- 40.64cm (16 inches)<br/>
<span style={{color:"red"}}>Weight</span><br/>

Gross 5.860 g <br/>
<span style={{color:"red"}}>Purity</span>

18 KT</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More<span class="fas fa-arrow-right"></span></div>
                                <div class="d-flex align-items-center justify-content-center foot"> <p class="admin">Admin</p> <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4"> <div class="backgroundEffect"></div> <div class="pic">
                        <img class="" src={product3} alt="" />
                        <div class="date">
                            <span class="day">5</span> <span class="month">may</span> <span class="year">2023</span> </div> </div> <div class="content">  <p class="h-1 mt-4">
<span style={{color:"red"}}>  Dimensions </span><br/> Width - 1.85 mm

Height - 1.85 mm

C Length- 40.64cm (16 inches)<br/>
<span style={{color:"red"}}>Weight</span><br/>

Gross 5.860 g <br/>
<span style={{color:"red"}}>Purity</span>

18 KT</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More<span class="fas fa-arrow-right"></span></div>
                                <div class="d-flex align-items-center justify-content-center foot"> <p class="admin">Admin</p> <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p> </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic">
                            <img class="" src={product4} alt="" />
                            <div class="date">
                                <span class="day">5</span> <span class="month">may</span> <span class="year">2023   </span> </div> </div> <div class="content"> <p class="h-1 mt-4">
<span style={{color:"red"}}>  Dimensions </span> <br/>Width - 1.85 mm

Height - 1.85 mm

C Length- 40.64cm (16 inches)<br/>
<span style={{color:"red"}}>Weight</span><br/>

Gross 5.860 g <br/>
<span style={{color:"red"}}>Purity</span>

18 KT</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3"> <div class="btn btn-primary">Read More<span class="fas fa-arrow-right"></span>
                            </div>
                                <div class="d-flex align-items-center justify-content-center foot">
                                    <p class="admin">Admin</p> <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p> </div> </div> </div> </div> 
                                    
                                    
                                    
                                    
                                    </div> </div>


                                    <div className="bestSeller">
                                        <h1>best seller</h1>

                                    </div>



                                    


        </>

    )



}

export default Blogs;