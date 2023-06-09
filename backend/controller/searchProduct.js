const Product =  require('../model/Product');

const searchProduct = async (req , res)=>{
    console.log('all search data------', req.body);

    let result = await Product.find({

        "$or": [
            { name: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
            { price: { $regex: req.params.key } },
            { company: { $regex: req.params.key } }
        ]
    });

    // console.log('all search data------', result);
    res.send(result)

}

module.exports=searchProduct;