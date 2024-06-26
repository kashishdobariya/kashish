const { d_Service } = require("../Services");

const create_d =async(req,res) =>{


    try {
  
        const d = req.body
   
        const new_d = await d_Service.create_d_S(data)
   
        console.log(new_d);
   
         if (!new_d) {
   
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               d: new_d
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_d = async(req,res) => {
     try {
         const d_list = await d_Service.get_d_S()
 
         if(!d_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             d: d_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_d = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await d_Service.delete_d(id)
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
 
 const update_d =async(req,res) =>{
     try {
          const id = req.params.d_id
          const d = req.body
          
          
          const result = await d_Service.update_d(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             d:d
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             d:d
           })
 
         
     }
 
}



module.exports ={
    create_d,
    get_d,
    delete_d,
    update_d
}