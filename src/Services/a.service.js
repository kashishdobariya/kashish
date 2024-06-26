const { Data } = require("../Model")


const create_a_S =(data) =>{
    return a.create(data)

}

const get_a_S =() =>{
    return a.find()

}

const delete_a =(id) =>{
    return a.findByIdAndDelete(id)

}

const update_a =(id,data) =>{

    return a.findByIdAndUpdate(id,data)

}


module.exports ={
    create_a_S,
    get_a_S,
    delete_a,
    update_a
}