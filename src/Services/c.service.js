const { Data } = require("../Model")


const create_c_S =(data) =>{
    return c.create(data)

}

const get_c_S =() =>{
    return c.find()

}

const delete_c =(id) =>{
    return c.findByIdAndDelete(id)

}

const update_c =(id,data) =>{

    return c.findByIdAndUpdate(id,data)

}


module.exports ={
    create_c_S,
    get_c_S,
    delete_c,
    update_c
}