var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shinigami121999@gmail.com',
    pass: 'Ranjit@1999'
  }
});

var mailOptions = {
  from: 'shinigami121999@gmail.com',
  to: 'ranjitkumar448@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
