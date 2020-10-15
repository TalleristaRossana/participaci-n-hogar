const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//app.use(express.static('public'));

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
    return response.redirect('/form-with-get');
});

app.get('/form-with-get', function(request, response) {
  return response.render('form-with-get');
});

app.get('/form-with-post', function(request, response){
  return response.render('form-with-post')
});

app.get('/resultado', function(request, response){
  response.render('resultado');
});

app.post('/resultado', function(request, response){
  return response.send(request.body);
});


app.listen(3000, () => console.log('Gator app listening on port 3000!'));
