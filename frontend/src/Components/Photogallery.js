import React from "react";
// import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import product2  from  '../websites_images/Diamond Jwellery/1.jpg';
// import product3  from  '../websites_images/Diamond Jwellery/2.webp';
import goldProduct  from  '../websites_images/Gold Jwellery/5.jpg';
import goldProduct1  from  '../websites_images/Gold Jwellery/6.jpg';
import goldProduct2  from  '../websites_images/Gold Jwellery/7.jpg';
import goldProduct3  from  '../websites_images/Gold Jwellery/8.jpg';


import diamond1  from  '../websites_images/Diamond Jwellery/1.jpg';
import diamond2  from  '../websites_images/Diamond Jwellery/2.jpg';
import diamond3  from  '../websites_images//Diamond Jwellery/3.jpg';
import diamond4  from  '../websites_images/Diamond Jwellery/4.jpg';


import platinum1  from  '../websites_images/Platinum Jwellery/1.jpg';
import platinum2  from  '../websites_images/Platinum Jwellery/2.jpg';
import platinum3  from  '../websites_images/Platinum Jwellery/3.jpg';
import platinum4  from  '../websites_images//Platinum Jwellery/4.jpg';


import { useEffect} from "react";
import $ from 'jquery';
 


const Photogallery = () => {

    useEffect(() => {

$(document).ready(function(){
        
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

                if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
            }
                $(this).addClass("active");
            });
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

    
      }, []);
    return (
<>

<section class="portfolio" id="portfolio">
	<div class="container-fluid">
		<div class="row">

			<div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h1 class="gallery-title">Gallery</h1>
			</div>

			<div align="center">
				<  button  class="filter-button" data-filter="all">All</button>
				<button class="filter-button" data-filter="category1">Platinum Jeweller</button>
				<button class="filter-button" data-filter="category2">Gold Jewellery</button>
				<button class="filter-button" data-filter="category3">Diamond Jewellery</button>
			</div>
			
			<br/>

            <div class="gallery_product col-sm-3 col-xs-6 filter category1">
                <a class="fancybox" rel="ligthbox" href={platinum1}>
                    <img class="img-responsive" alt="" src={platinum1} />
                    <div class='img-info'>
                        <h4>Paris Platinum Band for Men</h4>
						<p>Rs.30000</p>
                    </div>
                    <div class='img-info text-center'>
                 
							<a href ="/PlatinumesProduct1" class="btn btn-danger">Add to cart</a>
                   
						
                    </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category2">
                <a class="fancybox" rel="ligthbox" href={goldProduct}>
                    <img class="img-responsive" alt="" src={goldProduct} />
                    <div class='img-info'>
                        <h4>Gold Neckless</h4>
						<p>22k Sleek gold ring with unique design from Goldlites Collection</p>
                    </div>
                    <div class='img-info text-center'>
                 
                 <a href ="/GoldProduct1" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category3">
                 <a class="fancybox" rel="ligthbox" href={diamond2}>
                    <img class="img-responsive" alt="" src={diamond2} />
                    <div class='img-info'>
                        <h4>The Yana Ring
</h4>
						<p>Rs. 60000</p>
                    </div>
                    <div class='img-info text-center'>
                 
                 <a href ="/DiamondProduct1" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category1">
                <a class="fancybox" rel="ligthbox" href={platinum2}>
                    <img class="img-responsive" alt="" src={platinum2} />
                    <div class='img-info'>
                        <h4>Halo Solitaire Ring</h4>
						<p>Rs. 95000/-</p>
                    </div>
                    <div class='img-info text-center'>
                 
                 <a href ="/PlatinumeProduct2" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category2">
                <a class="fancybox" rel="ligthbox" href={goldProduct1}>
                    <img class="img-responsive" alt="" src={goldProduct1} />
                    
                    <div class='img-info'>
                        <h4>Gold Neckless</h4>
						<p>Wishlist
14K Gold Neckless From Amazea Collection With Gemmed Loop</p>
                    </div>
                    <div
                       class='img-info text-center'>
                 
                 <a href ="/GoldProduct2" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category3">
                <a class="fancybox" rel="ligthbox" href={diamond4}>
                    <img class="img-responsive" alt="" src={diamond4} />
                    <div class='img-info'>
                        <h4>The Grappa Nckeless</h4>
						<p>Rs.2000000</p>
                    </div>
                    <div class='img-info text-center'>
                 
                 <a href ="/DiamondProduct2" class="btn btn-danger">Add to cart</a>
        
             
         </div>
 
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category1">
                <a class="fancybox" rel="ligthbox" href={platinum4}>
                    <img class="img-responsive" alt="" src={platinum4} />
                    <div class='img-info'>
                        <h4>Napoleon Platinum Band for Men</h4>
						<p>Rs. 140000</p>
                    </div>  
                    <div class='img-info text-center'>
                 
                 <a href ="/PlatinumeProduct3" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category2">
                <a class="fancybox" rel="ligthbox" href={goldProduct2}>
                    <img class="img-responsive" alt="" src={goldProduct2} />
                    <div class='img-info'>
                        <h4>Gold Neckless</h4>
						<p>P.C. Chandra Jewellers 22K Yellow Gold Neckless</p>
                    </div>
                    <div class='img-info text-center'>
                 
                 <a href ="/GoldProduct3" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category3">
                <a class="fancybox" rel="ligthbox" href={diamond3}>
                    <img class="img-responsive" alt="" src={diamond3}/>
                    <div class='img-info'>
                        <h4>Tiffany Soleste Cushion-cut Double Halo Engagement Ring with a Diamond Platinum Band</h4>
						<p>Rs. 80000</p>
                    </div>

                    <div class='img-info text-center'>
                 
                 <a href ="/DiamondProduct3" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                    
                    
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category1">
                <a class="fancybox" rel="ligthbox" href={platinum3}>
                    <img class="img-responsive" alt="" src={platinum3} />
                    <div class='img-info'>
                        <h4>Love Song Platinum Ring</h4>
						<p>Rs. 98000/-</p>
                    </div>
                    
                    <div class='img-info text-center'>
                 
                 <a href ="/PlatinumeProduct4" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category2">
                <a class="fancybox" rel="ligthbox" href={goldProduct3}>
                    <img class="img-responsive" alt="" src={goldProduct3} />
                    <div class='img-info'>
                        <h4>Gold neckless</h4>
						<p>Wishlist
Gorgeous 22k Gold Studded Necklace from Tushi Collection</p>
                    </div>
                    
                    <div class='img-info text-center'>
                 
                 <a href ="/GoldProduct4" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

            <div class="gallery_product col-sm-3 col-xs-6 filter category3">
                <a class="fancybox" rel="ligthbox" href={diamond1}>
                    <img class="img-responsive" alt="" src={diamond1} />
                    <div class='img-info'>
                        <h4>Tiffany True Engagement Ring with a Tiffany True Diamond in Platinum</h4>
						<p>Rs. 200000</p>
                    </div>
                    <div class='img-info text-center'>
                 
                 <a href ="/DiamondProduct4" class="btn btn-danger">Add to cart</a>
        
             
         </div>
                </a>
            </div>

		</div>
	</div>
</section>


                        </>


                        )





}

                        export default Photogallery;