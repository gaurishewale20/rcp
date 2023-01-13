import mongoose from "mongoose";

const currentSchema = mongoose.Schema(
  {
    StartDateCurr: { type: Date, required: true },
    EndDateCurr: { type: Date, required: true },
    StartStationCurr: { type: String, required: true },
    EndStationCurr: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status : {
      type : String,
      default : 'Pending'
    }
  },
  { timestamps: true }
);

export default mongoose.model("Current", currentSchema);
