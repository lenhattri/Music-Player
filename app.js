var express =require('express');
var morgan = require('morgan');
var { engine } = require('express-handlebars');
var path = require('path');
var app =express();
var initRoutes = require('./src/init_routes');
const port= 3000;



morgan('combined');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'src/views'));

initRoutes(app);


app.listen(port,()=>{
    console.log('Listen in http://localhost:'+port);
});