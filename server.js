const express=require("express")
const app=express()
app.use(express.static("public"))
app.use (express.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');

});
 
app.post('/', function(request, response){
  console.log(request.body);

});
 


app.listen(4000, function(){
    console.log("Server listening on PORT");
 });