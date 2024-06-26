const mongoose = require("mongoose")

const f_Schema = mongoose.Schema(

    {
        f_name:{
            type:String,
            strim:true
        },
        f_id:{
            type:Number,
            default:0
        }
    },

    {
        timestamps:true
    }
)

const f = mongoose.model("F",f_Schema)
module.exports = f