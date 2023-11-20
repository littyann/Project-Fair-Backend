const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas successfully connected with pfServer");
}).catch((err)=>{
    console.log(`Mongodb connection failed!!! Error: ${err}`);
})