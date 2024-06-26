const { g_Service } = require("../Services");

const create_g =async(req,res) =>{

    try {
  
        const g = req.body
   
        const new_g = await g_Service.create_g_S(data)
   
        console.log(new_g);
   
         if (!new_g) {
            
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               g: new_g
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_g = async(req,res) => {
     try {
         const g_list = await f_Service.get_g_S()
 
         if(!g_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             g: g_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_g = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await g_Service.delete_g(id)
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
 
 const update_g =async(req,res) =>{
     try {
          const id = req.params.g_id
          const g = req.body
          
          
          const result = await g_Service.update_g(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             g:g
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             g:g
           })
 
         
     }
 
}



module.exports ={
    create_g,
    get_g,
    delete_g,
    update_g
}