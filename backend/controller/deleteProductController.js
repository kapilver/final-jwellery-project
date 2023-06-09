const Product = require('../model/Product');

const deleteProduct =async (req,res)=>{
    
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
    // console.log('delete id----is---------------', result);
}


module.exports = deleteProduct;