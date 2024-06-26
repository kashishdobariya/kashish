const { c_Service } = require("../Services");

const create_c =async(req,res) =>{


    try {
  
        const c = req.body
   
        const new_c = await c_Service.create_c_S(data)
   
        console.log(new_c);
   
         if (!new_c) {
   
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               c: new_c
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_c = async(req,res) => {
     try {
         const c_list = await c_Service.get_c_S()
 
         if(!c_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             c: c_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_c = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await c_Service.delete_c(id)
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
 
 const update_c =async(req,res) =>{
     try {
          const id = req.params.c_id
          const c = req.body
          
          
          const result = await c_Service.update_c(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             c:c
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             c:c
           })
 
         
     }
 
}



module.exports ={
    create_c,
    get_c,
    delete_c,
    update_c
}