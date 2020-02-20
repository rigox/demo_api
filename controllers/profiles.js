const Profile = require("../models/Profile")
const asyncHandler =  require("../middleware/async")

// @desc create a profile
// @route POST /api/v1/profiles/
// @access Private
exports.makeProfile  = asyncHandler(async (req,res,next)=>{
   
    const tempProfile  = await Profile.create(req.body)
      console.log('here in make profile'.yellow)

    res.status(201).json({
         success:true,
         data:tempProfile
    })

});
