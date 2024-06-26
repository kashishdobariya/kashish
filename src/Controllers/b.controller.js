const { b_Service } = require("../Services");

const create_b =async(req,res) =>{


    try {
  
        const b = req.body
   
        const new_b = await b_Service.create_b_S(data)
   
        console.log(new_b);
   
         if (!new_b) {
   
           throw new Error("somthing waring...")
   
         }
        res.status(200).json({
               success: true,
               messgae:"createddd",
               b: new_b
           })
          
     } catch (error) {
   
       res.status(400).json({
           success: false,
           messgae:error.messgae
       })
      
       
     }
   }
 
   const get_b = async(req,res) => {
     try {
         const b_list = await b_Service.get_b_S()
 
         if(!b_list){
             throw new Error("Data not found")
         }
 
         res.status(200).json({
             success: true,
             b: b_list
         })
     } catch (error) {
         res.status(400).json({
             success: false,
             message: error.message
         })
     }
 }
 
 const delete_b = async(req,res) => {
     try {
         // service
         const id = req.params.id
         const result = await a_Service.delete_b(id)
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
 
 const update_b =async(req,res) =>{
     try {
          const id = req.params.b_id
          const b = req.body
          
          
          const result = await b_Service.update_b(id,data)
 
          if(!result){
              throw new Error("not updatedd")
          }
 
           res.status(200).json({
             success:true,
             message:"updated",
             b:b
           })
 
     } catch (error) {
 
         res.status(400).json({
             success:false,
             message:error.message,
             b:b
           })
 
         
     }
 
}



module.exports ={
    create_b,
    get_b,
    delete_b,
    update_b
}