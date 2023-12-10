var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fneserin@gmail.com',
    pass: 'oyks mrwk omez ikyy'
  }
});

var mailOptions = {
  from: 'fneserin@gmail.com',
  to: 'fathimanezrin2001@gmail.com',
  subject: 'Assignment purpose',
  text: 'Hello dear...'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});