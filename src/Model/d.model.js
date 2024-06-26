const mongoose = require("mongoose")

const d_Schema = mongoose.Schema(

    {
        d_name:{
            type:String,
            strim:true
        },
        d_id:{
            type:Number,
            default:0
        }
    },

    {
        timestamps:true
    }
)

const d = mongoose.model("D",d_Schema)
module.exports = d