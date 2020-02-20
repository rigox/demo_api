const booking =  require("../models/Booking")
const asyncHandler =  require("../middleware/async")


// Make a Booking
//  POST /api/v1/bookings/
//@access Private
exports.makeBooking  = asyncHandler( async(req,res,next)=>{
      console.log(req.body,'here'.red)
});



