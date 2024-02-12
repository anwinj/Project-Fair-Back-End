const mongoose = require('mongoose')
const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(
    ()=>{
        console.log("MongoDB atlas connected with pf server");
    }
).catch((err)=>{
    console.log("MongoDB connection failed",err);
})