const { Data } = require("../Model")


const create_g_S =(data) =>{
    return g.create(data)

}

const get_g_S =() =>{
    return g.find()

}

const delete_g =(id) =>{
    return g.findByIdAndDelete(id)

}

const update_g =(id,data) =>{

    return g.findByIdAndUpdate(id,data)

}


module.exports ={
    create_g_S,
    get_g_S,
    delete_g,
    update_g
}