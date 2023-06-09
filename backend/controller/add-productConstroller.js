const Product = require('../model/Product');


const addProduct =  async(req , res)=>{

    let product = new Product(req.body);

    // console.log('req product data------------', product);
    let result = await product.save();
    res.send(result)

}

module.exports = addProduct;