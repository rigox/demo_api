const mongoose = require("mongoose")
const config =  require("config")
const uri = config.get("mongoURI")

const connectDB= async()=>{

     try {
           await mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false}) 
          console.log('Connected to DB'.blue.underline)
     } catch (err) {
          console.log(err)
     }

}

module.exports  = connectDB;