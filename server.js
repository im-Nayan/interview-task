const express = require('express');
const PORT = process.env.PORT ||5010 ;
const path = require('path')

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

// VIEW ENGINE AND VIEWS FOLDER
app.set('view engine','ejs');
app.set('views','views')

// ROUTER REQUIRE SECTION
const route = require('./Router/index_route')
app.use(route)

// CREATE SERVER
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})