const mongoose = require("mongoose")
const Schema =  mongoose.Schema


const  bookingSchema =  new Schema({
     name:{
          type:String,
          required:[true, 'please add  name']
     },
     time:{
            type:Date,
            required:[true,'please add the booking time']
     }
     ,
     customer:{
               type:Schema.Types.ObjectId,
     }
})

module.exports =   mongoose.model('bookings', bookingSchema)