const express = require('express');
const bodyParser = require('body-parser');
const pictCtrl = require('./controllers/pictCtrl')
const mailCtrl = require('./controllers/mailCtrl')
const appointmentCtrl = require('./controllers/appointmentCtrl')
const axios = require('axios')
require('dotenv').config();

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());

app.get('/landing', pictCtrl.landing)
app.get('/countertops/', pictCtrl.countertops)
app.get('/doors/', pictCtrl.doors)
app.get('/kitchens/', pictCtrl.kitchens)
app.get('/baths/', pictCtrl.baths)
app.get('/quartz/', pictCtrl.quartz)

app.post('/api/send', mailCtrl.mail)
app.post('/api/send-appointment', appointmentCtrl.mail)

// app.get('/pict', (req, res) => {
//   res.send(process.env.REACT_APP_URL)
// })

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = process.env.SERVER_PORT || 3035;
app.listen(PORT, () => {
    console.log(`Am I on?? Yup, on ${PORT}. `); 
} );
