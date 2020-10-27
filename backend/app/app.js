const express = require('express')

const app = express();

const startApp = () =>{
    app.listen(process.env.APP_PORT , ()=>{
        console.log('messanger is running....');
        
    })
}


module.exports = startApp