const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kapilvermajaika:verma131996@cluster0.led03qz.mongodb.net/e-commerce").then(() => console.log(" database connected")).catch((err) => console.log("Error ---------- " + err));



