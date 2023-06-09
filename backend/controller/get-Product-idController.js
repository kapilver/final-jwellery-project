const Product = require('../model/Product');

const getProductId =async  ( req,res)=>{
    

    let result = await Product.findOne({ _id: req.params.id });
    if (result) {

        res.send(result)
    } else {
        res.send({ result: "no record found" });
    }
}



module.exports = getProductId;