// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
    else if(request.url === '/stylesheets/mystyle.css'){
        fs.readFile('./stylesheets/mystyle.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
    else if (request.url === "/cars") {
         fs.readFile('views/cars.html', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/car1'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/car2'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/car3'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/car4'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/cat1'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/cat2'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/cat3'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/cat4'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        })
      }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");