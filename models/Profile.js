const mongoose = require("mongoose")
const Schema =  mongoose.Schema


const profileSchema =  new Schema({

    name:{
         type:String,
         required:[true,'please add name'],
         unique:true,
         trim:true,
         maxlength:[50,'name cannot be  more than 50 characthers']
    },
    
    phone:{
        type:String,
        maxlength:[20,'Phone numbe can not be longer  the 20 characthers']
    },
    
    email:{
        type:String,
        match:[
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            'please add a valid email'
                           ]
    },
    services:{
         enum:[
              'Makeup',
              'wardrobe assitance'
         ]
    },
    rates:{
         type:Number,

    },
    petFriendly:{
          type:String,
          default:"yes"
    }


})

module.exports =  mongoose.model('Profiles',profileSchema)