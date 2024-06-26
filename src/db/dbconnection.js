const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect("mongodb+srv://kashishdobariya389:BBzvdK8JRwOFgsvl@cluster0.xreuxfd.mongodb.net/").then((data) =>{
        // if(data) {
            console.log("data connected succesfully");
        // }
    }).catch((err) =>{
        console.log(err);
    })
}
module.exports = connectDB