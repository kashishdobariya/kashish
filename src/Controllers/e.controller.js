const { e_Service } = require("../Services");

const create_e =async(req,res) =>{


    try {
  
        const e = req.body
   
        const new_e = await e_Service.create_e_S(data)
   
        console.log(new_e);
   
         if (!new_e) {
   
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               e: new_e
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_e = async(req,res) => {
     try {
         const e_list = await e_Service.get_e_S()
 
         if(!e_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             e: e_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_e = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await e_Service.delete_e(id)
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
 
 const update_e =async(req,res) =>{
     try {
          const id = req.params.e_id
          const e = req.body
          
          
          const result = await d_Service.update_e(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             e:e
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             e:e
           })
 
         
     }
 
}



module.exports ={
    create_e,
    get_e,
    delete_e,
    update_e
}