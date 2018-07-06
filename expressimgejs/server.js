// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Express Cars and Cats operational</h1>");
})
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
    console.log(__dirname + "////////////")
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get("/cars", function (request, response){
    var these_cars = [
        {photo: "/images/car1.jpg"}, 
        {photo: "/images/car2.jpg"}, 
        {photo: "/images/car3.jpeg"}, 
        {photo: "/images/car4.jpg"}, 
    ];
    console.log(these_cars.photo);
    response.render('cars', {cars: these_cars});
})
app.get("/cats", function (request, response){
    var these_cats = [
        {photo: "/images/cat1.png"}, 
        {photo: "/images/cat2.jpg"}, 
        {photo: "/images/cat3.jpeg"}, 
        {photo: "/images/cat4.jpg"}, 
    ];
    response.render('cats', {cats: these_cats});
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})