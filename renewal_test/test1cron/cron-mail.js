const cron = require('node-cron');
const nodemailer = require('nodemailer');
// ...

// Create mail transporter.
let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'skylar.hegmann16@ethereal.email',
            pass: 'jQYca31rV2hdFgbrXD'
        }
    });

// ...

cron.schedule('* * * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
  
    let messageOptions = {
      from: 'skylar.hegmann16@ethereal.email',
      to: 'rsnambiar.social@gmail.com',
      subject: 'Scheduled Email',
      text: 'Hi there. This email was automatically sent by us.'
    };
  
    transporter.sendMail(messageOptions, function(error, info) {
      if (error) {
        throw error;
      } else {
        console.log('Email successfully sent!');
      }
    });
  });