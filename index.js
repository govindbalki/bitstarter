var express = require('express')
var app = express();

var buffer = new Buffer(fs.readFile(index.html), "utf-8");
var l_string = buffer.toString();


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(l_string)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
