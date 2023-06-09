const User = require('../model/Users');
const Otp = require('../model/otp');
const sgMail = require('@sendgrid/mail')
require('dotenv').config();

const forgotPasswordController = async (req, resp) => {

    let userExist = await User.findOne({ email: req.body.email })
    console.log('user ecxoir', userExist.email);
    let otp = ''

    if (userExist) {

        const generateOTP = (length = 4) => {
        
            for (let i = 0; i < length; i++) {
                otp += Math.floor(Math.random() * 10)
            }
            User.updateMany()
            return otp
        }


        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        console.log('cereate  key from send grid', process.env.SENDGRID_API_KEY);
        const msg = {
            to: userExist.email, // Change to your recipient
            from: 'kapil@fealtytechnologies.com', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
    
            html:   `  
            "<h1 style="background-color: aqua; color:#FFF; font-size:34px;     text-align: center;"  >OTP:  ${generateOTP()}</h1>"` ,

        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
                resp.json({message: "Success"});
                let newOTP = {
                    email : userExist.email,
                    otp : otp,
                   }
                saveOtp(newOTP);

            })
            .catch((error) => {
                console.error(error)
                resp.send(error)
            })

    }

}

const saveOtp = async (req, resp) => {
    console.log("ressssss.....", req)

    let otpExist = await Otp.findOne({ email: req.email })
    if (otpExist)
    {
    console.log('user ecxoir', otpExist);
    otpExist.otp = req.otp;
    let result = await Otp.findOneAndUpdate({ email: req.email }, { $set: otpExist }, { new: true });
    console.log("updated otp ", result);
    }
    // let otp = ''
    let otpKey = new Otp(req);
    if (!otpExist) {
        let result = await otpKey.save();
        console.log("result.........................", result) 
    }
}

module.exports = forgotPasswordController;  