const  Bookings =  require("../models/Booking")
const express =  require("express")
const {makeBooking}  = require("../controllers/booking")

const router = express.Router()



router.
    route('/')
    .post(makeBooking)




module.exports =  router;