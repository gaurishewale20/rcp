import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },

  //extra profile details
  phoneNo: { type: String, required: false },
  gender: { type: String, required: false },
  dob: { type: Date, required: false },
  address: { type: String, required: false },
  transportLine: { type: String, required: false },
  regId: { type: String, required: false },
  year: { type: Number, required: false },
  sem: { type: Number, required: false },
  program: { type: String, required: false },
  department: { type: String, required: false },

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
