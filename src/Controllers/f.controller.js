const { f_Service } = require("../Services");

const create_f =async(req,res) =>{


    try {
  
        const f = req.body
   
        const new_f = await f_Service.create_f_S(data)
   
        console.log(new_f);
   
         if (!new_f) {
   
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               f: new_f
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_f = async(req,res) => {
     try {
         const f_list = await f_Service.get_f_S()
 
         if(!f_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             f: f_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_f = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await f_Service.delete_f(id)
         res.status(200).json({
             success:true,
             message:"Deeeleted"
         })
     } catch (error) {
         // res
         res.status(400).json({
             success:false,
             message:error.message
         })
     }
 }
 
 const update_f =async(req,res) =>{
     try {
          const id = req.params.f_id
          const f = req.body
          
          
          const result = await f_Service.update_f(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             f:f
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             f:f
           })
 
         
     }
 
}



module.exports ={
    create_e,
    get_e,
    delete_e,
    update_e
}