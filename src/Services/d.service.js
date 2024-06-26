const { Data } = require("../Model")


const create_d_S =(data) =>{
    return d.create(data)

}

const get_d_S =() =>{
    return d.find()

}

const delete_d =(id) =>{
    return d.findByIdAndDelete(id)

}

const update_d =(id,data) =>{

    return d.findByIdAndUpdate(id,data)

}


module.exports ={
    create_d_S,
    get_d_S,
    delete_d,
    update_d
}