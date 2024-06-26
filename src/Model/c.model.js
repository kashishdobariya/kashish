const mongoose = require("mongoose")

const c_Schema = mongoose.Schema(

    {
        c_name:{
            type:String,
            strim:true
        },
        c_id:{
            type:Number,
            default:0
        }
    },

    {
        timestamps:true
    }
)

const c = mongoose.model("C",c_Schema)
module.exports = c