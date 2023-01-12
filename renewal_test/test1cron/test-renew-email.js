const cron = require('node-cron');
const nodemailer = require('nodemailer');
// ...

// Create mail transporter.
let transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  secure: true,
  port: 465,
        auth: {
            user: 'testingthecron@zohomail.in',
            pass: 'ye3f7Pn6KLfB'
        }
    });

// ...


const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://resh:resh@cluster0.fcr60ip.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);



cron.schedule('* * * * *', function() {
    console.log('---------------------');
    console.log('Regular checking for expiry dates...');

    const database = client.db("forcron");
    const userrequests = database.collection("userrequests");

    const query = { };
    const cursor = userrequests.find(query);

    if (cursor.count() == 0){
      console.log("No requests found.");
    }

    else{

    cursor.forEach(function(myDoc) {
      let date_curr = new Date();
      date_curr.setUTCHours(0,0,0,0);
      if(myDoc.exp.getTime() == date_curr.getTime())
      {
        let messageOptions = {
          from: 'testingthecron@zohomail.in',
          to: myDoc.email,
          subject: 'Your railway pass expires soon!',
          text: 'Your season ticket may expire soon. Go to this link to renew your concession request: <link here>.'
        };

        transporter.sendMail(messageOptions, function(error, info) {
          if (error) {
            throw error;
          } else {
            console.log('Email successfully sent!');
          }
        });
      }
    }
    );

  }
});