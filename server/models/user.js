import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },

  //extra profile details
  phoneNo: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  transportLine: { type: String, required: true },
  regId: { type: String, required: true },
  a_year: { type: Number, required: true },
  sem: { type: Number, required: true },
  program: { type: String, required: true },
  department: { type: String, required: true },
  vjti_id: { type: Buffer, required: false },
  aadhar_card: { type: Buffer, required: false },

  //passes
  currentPass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Current",
  },
  historyPass: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
    },
  ],
});

export default mongoose.model("User", userSchema);
