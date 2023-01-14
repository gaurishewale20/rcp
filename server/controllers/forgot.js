import UserModal from "../models/user.js";
import nodemailer from "nodemailer";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//const nodemailer = require('nodemailer');



export const sendmail = async (req, res) => {
    const { email } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'hellen.upton42@ethereal.email',
          pass: 'MhPEYzK6ctBepx2FDx'
      }
        });
  
    try {
      console.log("here");
      const oldUser = await UserModal.findOne({ email });

      console.log(email);
  
      if (oldUser)
      {
        console.log("forgotnow");
        console.log(oldUser);

        var tokenObject = {
          email: oldUser.email,
          id: oldUser._id
        };

        var secret = oldUser._id + '_' + oldUser.email + '_' + new Date().getTime();
        var token = jwt.sign(tokenObject, secret);

        var textmail = 'Your password is to be reset. Go here '+ 'http://localhost:3000/forgot/reset_password?token=' + token + '.'

        const result = await UserModal.findByIdAndUpdate({ _id: oldUser._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, { new: true });
        
        console.log(result);

        let messageOptions = {
            from: 'hellen.upton42@ethereal.email',
            to: email,
            subject: 'Reset password',
            text: textmail
          };
  
          transporter.sendMail(messageOptions, function(error, info) {
            if (error) {
              throw error;
            }
          
              

          });
      }
      else{
        console.log("what?")
      }
      res.status(200).json({ message: "It went right." });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };
  

export const resetpw = async (req, res) => {
  const { password, confirmPassword, token } = req.body;

  try {

    console.log(password)
    console.log(confirmPassword)
    console.log(token)
    
    let user = await UserModal.findOne({
      reset_password_token: token,
      reset_password_expires: {
        $gt: Date.now()
      }
    });

    console.log(user);






    // const user = await UserModal.findById(id);

    if(user && confirmPassword == password){

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    user.password = hashedPassword;
    const result = await user.save();
    res.status(201).json({result});
    // res.status(201).json({message: "it works till here"});
    }
    else{
      res.status(500).json({ message: "User not found" });
    }

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};