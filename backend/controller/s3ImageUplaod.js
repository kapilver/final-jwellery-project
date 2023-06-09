var AWS = require("aws-sdk");
const fs = require("fs");
const accessKeyId = "AKIARFZ4BQ3PTKMPF7EC";
const  secretAccessKey = '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';
const region = 'us-east-1';
const Bucket = 'profileimagess';




const s3ImageUpload =(file, path) => {
    AWS.config.update({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region
    });
    const s3 = new AWS.S3();
    var params = {
        Bucket: Bucket,
        Body: fs.createReadStream(file.path),

        Key: `${path}/${file.filename}`,
        ContentType: file.mimetype,
    };

    return new Promise((resolve, reject) => {

        s3.upload(params, function (s3Err, data) {

            console.log('params----------',params);
            if (s3Err) {
                // console.log("the value of S3err is " + s3Err);
                fs.unlinkSync(file.path);
                resolve({ message: 'Er ror on image!', path: '' });
            } else {
                fs.unlinkSync(file.path);
                resolve({ message: 'image upload!', path: data })
            }
        })
    })
}

module.exports = s3ImageUpload;



