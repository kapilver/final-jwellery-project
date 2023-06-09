const User = require('../model/Users');
var jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';

const loginUser= async (req,res)=>{
    console.log('body data from login api-------------', req.body);

    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        // res.send('-------------------user data findone',user);
        if (user) {

            jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {

                if (err) {
                    res.send({ result: "something went wornhg , please try afte some time" })
                }

                console.log('login token generate---------------',token);
                res.send({ user, auth: token });

                //you give any name insteaf of auth 

            })

        } else {


            // res.statusCode = 401;
            res.status(401).json({ error: "no user found" });

            res.send({ result: "no user found" });
        }

    } else {
        res.status(401).json({ error: "no user found" });
        res.send({ result: 'no user found' });
    }
}





module.exports = loginUser;



