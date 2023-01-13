import Current from "../models/current.js";
import History from "../models/history.js";

import nodemailer from "nodemailer";

export const addPass = async (req, res) => {
  const {
    profile,
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    period,
    classs,
  } = req.body;

  const { StartDateCurr, EndDateCurr, StartStationCurr, EndStationCurr } =
    req.body;

  const histPass = new History({
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    period,
    classs,
  });

  histPass.user = profile.result._id;
  await histPass.save();

  const currPass = new Current({
    StartDateCurr,
    EndDateCurr,
    StartStationCurr,
    EndStationCurr,
  });

  currPass.user = profile.result._id;
  await currPass.save();

  console.log("Saved Pass");

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'eladio47@ethereal.email',
        pass: 'yeXUHXy6PArZVWxECh'
    }
  });

  console.log(profile.result.email);

  let email = profile.result.email;

  // console.log(profile.result)
  console.log(email);

  let messageOptions = {
    from: 'eladio47@ethereal.email',
    to: email,
    subject: 'Your request has been submitted.',
    text: 'Your concession request has been submitted.'
  };

  transporter.sendMail(messageOptions, function(error, info) {
    if (error) {
      throw error;
    }
  });

  let messageOptions2 = {
    from: 'eladio47@ethereal.email',
    to: 'admin@vjti.com',
    subject: 'Someone has put in a request',
    text: 'Please go to Concession website and check'
  };

  transporter.sendMail(messageOptions2, function(error, info) {
    if (error) {
      throw error;
    }
  });

};
