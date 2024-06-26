const mongoose = require("mongoose")

const g_Schema = mongoose.Schema(

    {
        g_name:{
            type:String,
            strim:true
        },
        g_id:{
            type:Number,
            default:0
        }
    },

    {
        timestamps:true
    }
)

const g = mongoose.model("G",g_Schema)
module.exports = g