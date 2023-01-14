import Current from "../models/current.js";
import History from "../models/history.js";
import User from "../models/user.js";

import nodemailer from "nodemailer";

import UserModal from "../models/user.js";

export const addPass = async (req, res) => {
  
  const {
    profile,
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    periodHist,
    classsHist,
  } = req.body;

  const {
    StartDateCurr,
    StartStationCurr,
    EndStationCurr,
    periodCurr,
    classsCurr,
  } = req.body;
  const user = await User.findById(profile.result._id);
  const histPass = new History({
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    periodHist,
    classsHist,
  });

  histPass.user = profile.result._id;
  if (TicketNo !== "") {
    const histPassSaved = await histPass.save();
    user.historyPass.push(histPassSaved._id);
  }

  const currPass = new Current({
    StartDateCurr,
    StartStationCurr,
    EndStationCurr,
    periodCurr,
    classsCurr,
  });

  currPass.user = profile.result._id;
  const currPassSaved = await currPass.save();
  
  user.currentPass = currPassSaved._id;
  await user.save();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'hellen.upton42@ethereal.email',
        pass: 'MhPEYzK6ctBepx2FDx'
    }
  });

  console.log(profile.result.email);

  let email = profile.result.email;
  let name = profile.result.name;

  // console.log(profile.result)
  console.log(email);
  console.log(name);

  let messageOptions = {
    from: 'hellen.upton42@ethereal.email',
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
    from: 'hellen.upton42@ethereal.email',
    to: 'railwayconcessionstaff@vjti.ac.in',
    subject: 'Someone has put in a request',
    text: 'Please go to the Concession website and check the request by ' + name
  };

  transporter.sendMail(messageOptions2, function(error, info) {
    if (error) {
      throw error;
    }
  });
};

export const getPendingRequests = async (req, res) => {
  try {
    const total = await Current.countDocuments({});
    // sorting because we want the posts from newest to oldest. -1 means sort in descending order

    const requests = await Current.find({status:"Pending"}).sort({ _id: -1 });
    res.status(200).json({ data: requests  });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPastRequests = async (req, res) => {
  try {

    const total = await Current.countDocuments({});
    // sorting because we want the posts from newest to oldest. -1 means sort in descending order
    const requests = await Current.find({status:{$in:["Approved", "Denied", "approved","denied"]}}).sort({ _id: -1 });
    res.status(200).json({ data: requests  });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const approveRequest = async (req, res) => {
  try {
    const {
      _id,
      status,
      StartDateCurr,
      EndDateCurr,
      StartStationCurr,
      EndStationCurr,
      user,
      createdAt,
      updatedAt,
    } = req.body;

    // if (!mongoose.Types.ObjectId.isValid(_id))
    //   return res.status(404).send(`No post with id: ${_id}`);

    console.log("approved");

    updatedEvent = await Current.findByIdAndUpdate(
      _id,
      { $set: { status: "Approved" } },
      {
        new: true,
      },
      async function (err, result) {
        console.log(result);
        if (err) {
          console.log(err);
          res.send(err);
        } else {

          const oldUser = await UserModal.findById( result.user );

          let email = oldUser.email;
        // let name = profile.result.name;
      
        // console.log(profile.result)
        console.log(email);
        // console.log(name);

        let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'hellen.upton42@ethereal.email',
              pass: 'MhPEYzK6ctBepx2FDx'
          }
            });
      
        let messageOptions = {
          from: 'hellen.upton42@ethereal.email',
          to: email,
          subject: 'Your request has been approved.',
          text: 'Your concession request has been approved. Please visit the office.'
        };
      
        transporter.sendMail(messageOptions, function(error, info) {
          if (error) {
            throw error;
          }
        });

          console.log(result);
          res.send(result);
        }
      }
    );

  //   console.log("here");

  //   console.log(updatedEvent);

  //   const oldUser = await UserModal.findOne({ _id: _id });

  //   let email = oldUser.email;
  // // let name = profile.result.name;

  // // console.log(profile.result)
  // console.log(email);
  // // console.log(name);

  // let messageOptions = {
  //   from: 'hellen.upton42@ethereal.email',
  //   to: email,
  //   subject: 'Your request has been approved.',
  //   text: 'Your concession request has been approved. Please visit the office.'
  // };

  // transporter.sendMail(messageOptions, function(error, info) {
  //   if (error) {
  //     throw error;
  //   }
  // });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const denyRequest = async (req, res) => {
  // console.log(req.body);
  try {
    const {
      _id,
      status,
      StartDateCurr,
      EndDateCurr,
      StartStationCurr,
      EndStationCurr,
      user,
      createdAt,
      updatedAt,
    } = req.body;

    // if (!mongoose.Types.ObjectId.isValid(_id))
    //   return res.status(404).send(`No post with id: ${_id}`);

    console.log("rejected");

    updatedEvent = await Current.findByIdAndUpdate(
      _id,
      { $set: { status: "Denied" } },
      {
        new: true,
      },
    async function (err, result) {
      console.log(result);
      if (err) {
        console.log(err);
        console.log("here")
        res.send(err);
      } else {
        console.log("over here")
        const oldUser = await UserModal.findById( result.user );

        let email = oldUser.email;
      // let name = profile.result.name;
    
      // console.log(profile.result)
      console.log(email);
      // console.log(name);

      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'hellen.upton42@ethereal.email',
            pass: 'MhPEYzK6ctBepx2FDx'
        }
          });
    
      let messageOptions = {
        from: 'hellen.upton42@ethereal.email',
        to: email,
        subject: 'Your request has been rejected.',
        text: 'Your concession request has been rejected. Please visit the office for clarification.'
      };
    
      transporter.sendMail(messageOptions, function(error, info) {
        if (error) {
          throw error;
        }
      });

        console.log(result);
        res.send(result);
      }
    }
    );

    console.log(updatedEvent);
    console.log("here then");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
