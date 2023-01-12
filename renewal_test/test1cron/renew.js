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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://resh:resh@cluster0.fcr60ip.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("forcron").collection("userrequests");
  // perform actions on the collection object
  collection.find( {} ).toArray(function(err, result) {
    if (err) throw err;
    console.log(err);
    console.log(result);
  });
  client.close();
});


cron.schedule('* * * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');


  
    let messageOptions = {
      from: 'skylar.hegmann16@ethereal.email',
      to: 'rsnambiar.social@gmail.com',
      subject: 'Scheduled Email',
      text: 'Hi there. This email was automatically sent by us.'
    };
  
    // transporter.sendMail(messageOptions, function(error, info) {
    //   if (error) {
    //     throw error;
    //   } else {
    //     console.log('Email successfully sent!');
    //   }
    // });
  });