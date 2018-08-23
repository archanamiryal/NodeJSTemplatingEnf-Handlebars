var express=require('express');
var app=express();
var routes=require('./routes/routes');
var exphbs=require('express-handlebars');

app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.get('/',routes.home);
app.get('/:city',routes.city);
app.get('/hello/:fname/:lname',routes.hello);

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
})

