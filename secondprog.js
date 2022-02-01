var express=require('express');
var app=express();
app.set('view emngine','jade');
app.get('/',function(req,res)
{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Express test 001!');
});
var server=app.listen(3000,function()
{
});