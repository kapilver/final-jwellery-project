const Product = require('../model/Product');


const Products = async (req,res)=>{
    
    let products = await Product.find({}).sort("name");
//    console.log(products);
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: 'products not found' })
}
}

module.exports = Products;