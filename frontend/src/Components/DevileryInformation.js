    import React from 'react';


import product2  from  '../websites_images/jwelleryImage/p2.png';
import product3  from  '../websites_images/jwelleryImage/p4.png';
import product4  from  '../websites_images/jwelleryImage/p5.png';
import product6  from  '../websites_images/jwelleryImage/p6.png';

    import 'bootstrap/dist/css/bootstrap.min.css';
const DevileryInformation=()=>{
    return(

   <>




<div class="container-fluid">
    <div class="container text-center  top-heading">
        <h1>Thank you.</h1>
        <p class="lead w-lg-50 mx-auto">Your order has been placed successfully.</p>
        <p class="w-lg-50 mx-auto">Your order number is <a href="#">9237427634826</a>. We will immediatelly process your and it will be delivered in 2 - 5 business days.</p>
    </div>
    <div class="container">
        <h2 class="h5 mb-5 text-center">You may also like these products</h2>
        <div class="row">
            <div class="col-lg-3">
                <div class="card text-center mb-3">
                    <div class="py-5 px-4">
                        <img src={product3} alt="" class="img-fluid mb-4" />
                        <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">Gold chain new</a></h3>
                        <span class="text-success">$799.00</span> <del class="text-muted">$650.83</del>
                    </div>
                    <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span class="d-block">10%</span>
                        <span class="d-block">OFF</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card text-center position-relative mb-3">
                    <div class="py-5 px-4">
                        <img src={product2} alt="" class="img-fluid mb-4" />
                        <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">Gold chain</a></h3>
                        <span class="text-success">$250.00</span> <del class="text-muted">$250</del>
                    </div>
                    <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span class="d-block">25%</span>
                        <span class="d-block">OFF</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card text-center mb-3">
                    <div class="py-5 px-4">
                        <img src={product4} alt="" class="img-fluid mb-4" />
                        <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">Gold chain</a></h3>
                        <span class="text-success">$29.00</span> <del class="text-muted">$14.50</del>
                    </div>
                    <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span class="d-block">50%</span>
                        <span class="d-block">OFF</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card text-center mb-3">
                    <div class="py-5 px-4">
                        <img src={product6} alt="" class="img-fluid mb-4" />
                        <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">Gold chain</a></h3>
                        <span class="text-success">$110.00</span> <del class="text-muted">$85.23</del>
                    </div>
                    <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span class="d-block">25%</span>
                        <span class="d-block">OFF</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








   
   
   </>
    )



}



export default  DevileryInformation;