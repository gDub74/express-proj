const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser'); 


const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(__dirname + '/static'));

// if deciding to use body-parser un-comment out next few lines
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// bring in routes
require('./server/config/routes')(app);


app.listen(port, () => console.log(`listening on port ${port}`));