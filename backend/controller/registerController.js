const User = require('../model/Users');
var jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';
const s3ImageUpload = require('../controller/s3ImageUplaod');

const registrerUser =async (req,res)=>{

    // console.log("req",req.body);
// console.log("file ",req.body.image);

    req.body = JSON.parse(req.body.data);

    
    // console.log("req",req.file);

    let imageResp = null;
    // console.log("image" , req.body.image)
    if (req.file) {
  
        // console.log("Image    ",req.file);
        imageResp = await s3ImageUpload(req.file, `profileImage/${req.body.name}`);
        // console.log("s3Image", imageResp)
        if (!imageResp.path.Key) {
            res.status(500).json({ error: "can't upload image" });
            return
        }
    }
    let user = new User(req.body);
    console.log("--------------------user from front end  ",user);

    if (imageResp) user.image = imageResp.path.Key;

    let result = await user.save();
    result = result.toObject();
    delete result.password
    jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            res.send({ result: "something went wornhg , please try afte some time" })
        }

        // console.log('token--------in register ', token);
        // res.status(200).json({ Result: "User add successfully", result, auth: token });
        res.send({ result, auth: token });

        //you give any name insteaf of auth 

    })

}

module.exports = registrerUser;


    