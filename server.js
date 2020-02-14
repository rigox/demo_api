const express =   require("express")
const app = express()
const colors =  require("colors")
const PORT =  5000 || process.env.PORT




app.listen(PORT, ()=>{
      console.log(`listening on PORT ${PORT}`.yellow )
})

