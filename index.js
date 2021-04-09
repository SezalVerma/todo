const express = require('express');
const port = 8001;

const app = express();

// set up view engine & views 
app.set('view engine' , 'ejs');
app.set('views' , './views');

// all external files used in views are refered from given folder 
app.use(express.static('assets'));

// refer routers folder for all urls
app.use('/' ,  require('./routers'));

// server firing up
app.listen(port , function(err){
    if(err){
        console.log(" Error while running server at port : " , port );
        return;
    }
    console.log(`Server running at port : ${port}`);
})
