
var jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';


function verifyToken(req, res, next) {
    // console.log('mideele ware coallerd=====');

    let token = req.headers['authorization'];
    // console.log('token-------', token);
    if (token) {

        token = token.split(' ')[1];
        // console.log('token-------', token);
        jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {

                res.status(401).send({ result: 'please provide  valid token in header' })
            } else {


                next();

            }

        })

    } else {
        res.status(403).send({ result: 'please add token in header' })

    }

}

module.exports = verifyToken;