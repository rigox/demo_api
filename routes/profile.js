const express =  require("express")
const router = express.Router()
const {makeProfile}  =  require('../controllers/profiles')


router.
        route('/')
        .post(makeProfile)


module.exports   =  router;
