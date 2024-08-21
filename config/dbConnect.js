const mongoose=require ("mongoose")
const dbConnect=()=>{
   try {
      const conn=mongoose.connect(process.env.MONGODB_URL)

      console.log("DB Connected Successfully");
   } catch (error) {
       console.log("Db is in Error")

   }
}
module.exports={dbConnect}