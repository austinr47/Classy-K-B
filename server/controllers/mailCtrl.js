const nodemailer = require('nodemailer')
require('dotenv').config();

module.exports = {
  mail: (req, res) => {
    const { name, email, phone, city, state, comments } = req.body

     // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 3050,
      auth: {
        user: `${process.env.REACT_APP_GMAIL_ACCOUNT}`,
        pass: `${process.env.REACT_APP_GMAIL_PASSWORD}`
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    let HelperOptions = {
      from: '"Classy Kitchen & Bath" <confirmations@classyclosets.com>',
      to: `${process.env.REACT_APP_GMAIL_SEND_TO}`,
      subject: 'Classy Kitchen & Bath',
      html:
                `<div>Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> City: ${city} <br/> State: ${state} <br/> Comments: ${comments} </div>`
    }

    // send mail with defined transport object
    transporter.sendMail(HelperOptions, (error, info) => {
      if(error) {
        return console.log('this is an error ', error)  
      }
      // console.log("sent")
      // console.log(info)
      return res.status(200).send('Thank you! We will be in contact with you soon.')
    })
  }
}