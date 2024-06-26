const mongoose = require("mongoose")

const a_Schema = mongoose.Schema(

    {
        a_name:{
            type:String,
            strim:true
        },
        a_id:{
            type:Number,
            default:0
        }
    },

    {
        timestamps:true
    }
)

const a = mongoose.model("A",a_Schema)
module.exports = a