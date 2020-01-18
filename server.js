const  express =  require("express")
const app  =  express();
const PORT  =  5000


app.get('/',(req,res)=>{
    res.send('Welcome to the demo api')
});



app.listen(5001, ()=>{
      console.log(`listening on port ${PORT}`)
});