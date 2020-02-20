const express =   require("express")
const db =  require("./config/db")
const app = express()
const colors =  require("colors")
const cors =  require("cors")
// initiate database instance
db();


//load routes
const bookings =   require('./routes/booking');

//setup middleware
app.use(express.urlencoded(), express.json())
app.use(cors())

//setup  routes
app.use('/api/v1/bookings',bookings)


//Port
const PORT =  5000 || process.env.PORT



app.listen(PORT, ()=>{
      console.log(`listening on PORT ${PORT}`.yellow )
})

