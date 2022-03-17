const express = require('express');
const app = express();

// var bodyParser = require('body-parser');
const axios = require('axios').default;

const port = 3000;

// Config settings
app.set('view engine', 'ejs')
app.set('title', 'AI_EXPERIMENTS')


// Global middlewares
app.use(express.static(__dirname + '/public')); // Media assets are located here
//app.set('views', path.join(__dirname, '../views'))
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended:true}));
app.use(fileUpload(
 // {debug: true}
)); // Handles parsing of media files


app.get('/', (req, res) => {
  res.send('BRUHHH');
});



app.listen(port, () => {
  
  console.log(`App listening at http://localhost:${port}`);

})

