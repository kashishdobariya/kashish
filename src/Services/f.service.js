const { Data } = require("../Model")


const create_f_S =(data) =>{
    return f.create(data)

}

const get_f_S =() =>{
    return f.find()

}

const delete_f =(id) =>{
    return f.findByIdAndDelete(id)

}

const update_f =(id,data) =>{

    return f.findByIdAndUpdate(id,data)

}


module.exports ={
    create_f_S,
    get_f_S,
    delete_f,
    update_f
}