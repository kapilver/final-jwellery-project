const { schema } = require("../model/Users");

const joi = require('joi');

const signupValidation = (req, res) => {

    const schema = joi.object({

        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required(),
        image: joi.string().required().label('image'),


    })

    const validation = schema.validate(req.body);
    console.log('validation')
    res.send(validation)

}

module.exports = signupValidation