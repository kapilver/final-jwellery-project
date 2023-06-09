import React  from "react";

import headerImage1  from  '../websites_images/pearl-bracelets-royalty-woven-in-elegance-147074_720x.webp';
import headerImage2  from  '../websites_images/jwelleryImage/1.webp';
import headerImage3  from  '../websites_images/jwelleryImage/3.webp';
import product1  from  '../websites_images/jwelleryImage/product 1.jpg';
import product2  from  '../websites_images/jwelleryImage/p2.png';
import product3  from  '../websites_images/jwelleryImage/p4.png';
import product4  from  '../websites_images/jwelleryImage/p5.png';
import product6  from  '../websites_images/jwelleryImage/p6.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';
import 'font-awesome/css/font-awesome.min.css';

const Team = ()=>{

return (

  <>


        <div class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Our Team</h1>
            <p class="lead mb-0">You know that jewellery that has been lying in your locker since forever? It’s time to upgrade! With the CaratLane Gold Exchange Program, you can swap your old gold with stylish new jewellery that you’ll want to wear every day!.</p>
            <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-white">
                <u>purity or karatage</u>
                </a>
            </p>
        </div>
    </div>
</div>


<div class="container">
    <div class="row text-center">

        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">Manager</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link">{<Icon icon="il:instagram" />}</a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>

      
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">Team Leader</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>


        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">officer</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={headerImage1} />
                </div>
                <div>
                    <img src={headerImage2} />
                </div>
                <div>
                    <img src={headerImage3} />
                </div>
            </Carousel>
        </div>

<div>

</div>

<h1 style={{textAlign:"center"}} >Our Top products</h1>

        <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
  <div class="row py-3 shadow-5">
    <div class="col-12 mb-1">
      <div class="lightbox">
        <img
          src={product1}
          alt="Gallery image 1"
          class="ecommerce-gallery-main-img active w-100"
        />
      </div>
    </div>
    <div class="col-3 mt-1">
      <img
        src={product2}
      
        alt="Gallery image 1"
        class="active w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src={product3}

        alt="Gallery image 2"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src={product4}
       
        alt="Gallery image 3"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src={product6}
      
        alt="Gallery image 4"
        class="w-100"
      />
    </div>
  </div>
</div>

  
  </>
)

}


export default Team;