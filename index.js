//Allows us to use express 
const express = require('express');

//Assign express to a variable, allows us to execute express. Allows us to 
// use it throughout index.js to access the paths and listen to the correct port. 
const app = express(); 

//Gives us access to all of our routes in USER. need to create this for ever route file. 
const userRoutes = require("./server/routes/user");


app.use(express.json()); 

//CORS middleware 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Headers", "GET, POST, PUT, DELETE, OPTIONS"); 
    next(); 
})

//What we will call on our front end when using fetch and making http requests. Notice 
// userRoutes is our second parameter. 
app.use("/users", userRoutes);

//A PORT is a communication endpoint. This means our server can be accesssed at 
// http://localhost:3000
//When you deploy your website, you can set the environment variable PORT to tell your 
// web server what port to listen to 
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

