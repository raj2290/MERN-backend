
const express = require('express')
const app = express()
const port = 4000
const mongoDB = require("./db")
mongoDB();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Headers","Orgin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
