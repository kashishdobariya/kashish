const { a_Service } = require("../Services");

const create_a =async(req,res) =>{



    try {
  
        const a = req.body
   
        const new_a = await a_Service.create_a_S(data)
   
        console.log(new_a);
   
         if (!new_a) {
   
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               a: new_a
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_a = async(req,res) => {
     try {
         const a_list = await a_Service.get_a_S()
 
         if(!a_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             a: a_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_a = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await a_Service.delete_a(id)
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
 
 const update_a =async(req,res) =>{
     try {
          const id = req.params.a_id
          const a = req.body
          
          
          const result = await a_Service.update_a(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             a:a
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             a:a
           })
 
         
     }
 
}



module.exports ={
    create_a,
    get_a,
    delete_a,
    update_a
}