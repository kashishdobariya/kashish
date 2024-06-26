const { Data } = require("../Model")


const create_e_S =(data) =>{
    return e.create(data)

}

const get_e_S =() =>{
    return e.find()

}

const delete_e =(id) =>{
    return e.findByIdAndDelete(id)

}

const update_e =(id,data) =>{

    return e.findByIdAndUpdate(id,data)

}


module.exports ={
    create_e_S,
    get_e_S,
    delete_e,
    update_e
}