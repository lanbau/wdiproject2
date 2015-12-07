var http = require('http');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
   console.log(jsonArray); //here is your result jsonarray 
});
 
//read from file 
require("fs").createReadStream("./melvj.csv").pipe(converter);

}).listen(8080);

console.log('Server started');