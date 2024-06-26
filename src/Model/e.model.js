const mongoose = require("mongoose")

const e_Schema = mongoose.Schema(

    {
        e_name:{
            type:String,
            strim:true
        },
        e_id:{
            type:Number,
            default:0
        }
    },

    {
        timestamps:true
    }
)

const e = mongoose.model("E",e_Schema)
module.exports = e