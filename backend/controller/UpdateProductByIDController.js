const Product = require('../model/Product');

const updateProductById = async (req,res)=>{

    let result = await Product.updateOne(
        { _id: req.params.id }, {


        $set: req.body

    }

    )
    res.send(result)

}

module.exports =updateProductById;