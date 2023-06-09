const Otp = require('../model/otp');

const VerifyOtp = async function (req, res , next) {
    console.log('user req', req.params);
    let otpExist = await Otp.findOne({ email: req.params.email })
   
//    var kkk =  otpExist.json();

   console.log('result--------',otpExist);
//     console.log('user ecxoir', kkk);
    let otp = req.body.Otp;

    if (otp === otpExist.otp) {
        res.json({message: "Success"});
        }else {
            res.json({error: "Otp not found"})
        }
}

module.exports = VerifyOtp;
