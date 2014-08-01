var express = require('express')
var app = express();

var l_text = fs.readFileSync('index.html','utf8');
var buffer = new Buffer(fs.readFileSync('index.html','utf-8'),'utf-8');

//buffer=l_text;
var l_string = buffer.toString('utf8',0,buffer.length);
//console.log(text);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Just trying')
  //response.send(buffer.toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
