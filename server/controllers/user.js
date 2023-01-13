import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";
import { cloudinary } from "../config/cloudinaryConfig.js";
import multer from "multer";
import { storage } from "../config/cloudinaryConfig.js";
const upload = multer({ storage });
// const upload = multer({ dest: "uploads/" });
const secret = "test";

export const signin = async (req, res) => {
  const { email, password, vjti_id, aadhar_card } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    // cloudinary.v2.uploader.upload(req.file.path, function (err, result) {
    //   if (err) {
    //     req.json(err.message);
    //   }
    // });
    cloudinary.v2.uploader
      .upload(req.body.vjti_id)
      .then((result) => console.log(result));

    // upload.single("vjti_id");

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
