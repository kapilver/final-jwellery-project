
// const uplaodImage = require('../controller/uploadImagesS3AWS');
// const utils = require('../controller/uploadImagesS3AWS');
// // const uplaodImage = require('../controller/uploadImagesS3AWS');
// const uploadFile  = async (req,res)=>{

//     try {

//         console.log('file data ------- from postman -----',req.files);
//         console.log(req.files);// res.send(req);
//         let filename = Date.now() + req.files.params.name;

        
//         // let response = await utils.uploadImage(req,filename,"parmas");
//         let response = await uplaodImage(req,filename,"params");
//         console.log(response);
//         if(response.status){
//             res.send({response})
//             console.log(response);

//         }else{
//             res.send({response})
//             console.log(response);
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports  = uploadFile;