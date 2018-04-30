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

app.get('/api/landing', pictCtrl.landing)
app.get('/api/countertops/', pictCtrl.countertops)
app.get('/api/doors/', pictCtrl.doors)
app.get('/api/kitchens/', pictCtrl.kitchens)
app.get('/api/baths/', pictCtrl.baths)
app.get('/api/quartz/', pictCtrl.quartz)

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
