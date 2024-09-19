require('dotenv').config();
const express = require('express');
require('./Database/db.js');
const app = express();
const PORT= process.env.PORT || 3001
const authRoute = require('./Routes/AuthRoute.js');

app.listen(PORT,()=>{
    console.log("server is running on PORT: ",PORT); 
});


app.use('/auth',authRoute);








app.get('/',(req,res)=>{
    res.send("Server is Live");
});
