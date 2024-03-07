const mongoose=require('mongoose');
const dotenv = require("dotenv").config();
// const MongoURI="mongodb+srv://gofood:gofood@cluster0.oldqypw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB=async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(async()=>{
    console.log('db connected')
    const fetchedData=await mongoose.connection.db.collection('food_items');
    // console.log(`fetched data is ${fetchedData}`)
    // console.log('fetched data is:',  fetchedData.find({}).toArray() ) // u get output as it returning a promise - so add await.
    //  await fetchedData.find({}).toArray((e,data)=>{    
    //     if(e) console.log(e);
    //     else{
    //         global.fooditems=data;
    //         console.log(`data is :${global.fooditems}`)
    //     }
    // })
    const data=await fetchedData.find({}).toArray();
    if(data) {
        
        // {
        //     if(err)console.log(err);
        //     else{
        //         // global.food_items=data;
        //     }
        // })
        global.food_items=data;
       
        // console.log(data)
        // console.log(global.fooditems)

    }
    else{
        console.log('error in fetching db')
}
if(data){
    const fetchedData = await mongoose.connection.db.collection("foodCategory");
    const catData =  await fetchedData.find({}).toArray()
    global.foodCategory=catData;
}
else{
    console.log('error in fetching db')
}
    }
    )}
module.exports= mongoDB;
