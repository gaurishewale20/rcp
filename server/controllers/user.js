import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongodb from "mongodb";
const binary = mongodb.Binary;

import UserModal from "../models/user.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

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
  // console.log("working test", req.files);
  const {
    email,
    password,
    firstName,
    lastName,
    phoneNo,
    gender,
    dob,
    address,
    transportLine,
    regId,
    a_year,
    sem,
    program,
    department,
    vjti_id,
    aadhar_card,
  } = req.body;
  // const vjti_id = binary(req.files.vjti_id.data);
  // const aadhar_card = binary(req.files.aadhar_card.data);
  // const aadhar_card = binary(req.files.aadhar_card.data);

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email: email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      phoneNo: phoneNo,
      gender: gender,
      dob: dob,
      address: address,
      transportLine: transportLine,
      regId: regId,
      a_year: a_year,
      sem: sem,
      program: program,
      department: department,
      vjti_id: vjti_id,
      aadhar_card: aadhar_card,
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

//@description     Edit new profile
//@route           POST /api/users/
//@access          Private

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModal.findById(id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      //check pwd handling
      if (req.body.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        user.password = hashedPassword;
      }

      user.phoneNo = req.body.phoneNo || user.phoneNo;
      user.gender = req.body.gender || user.gender;
      user.dob = req.body.dob || user.dob;
      user.address = req.body.address || user.address;
      user.transportLine = req.body.transportLine || user.transportLine;
      user.regId = req.body.regId || user.regId;
      user.a_year = req.body.a_year || user.a_year;
      user.sem = req.body.sem || user.sem;
      user.program = req.body.program || user.program;
      user.department = req.body.department || user.department;
      user.vjti_id = req.body.vjti_id || user.vjti_id;
      user.aadhar_card = req.body.aadhar_card || user.aadhar_card;

      const result = await user.save();
      res.status(201).json({ result });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
