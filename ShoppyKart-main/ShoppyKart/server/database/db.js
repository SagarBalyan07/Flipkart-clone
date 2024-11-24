import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.zyogx59.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
      await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
      console.log('Database connected')
    }catch(error){
        console.log(`Error while connecting with database  `,error.message);
    }
}

export default Connection