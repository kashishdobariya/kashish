const { Data } = require("../Model")


const create_b_S =(data) =>{
    return b.create(data)

}

const get_b_S =() =>{
    return b.find()

}

const delete_b =(id) =>{
    return b.findByIdAndDelete(id)

}

const update_b =(id,data) =>{

    return b.findByIdAndUpdate(id,data)

}


module.exports ={
    create_b_S,
    get_b_S,
    delete_b,
    update_b
}