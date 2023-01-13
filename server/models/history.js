import mongoose from "mongoose";

const historySchema = mongoose.Schema(
  {
    TicketNo: { type: String, required: true },
    StartDateHist: { type: Date, required: true },
    EndDateHist: { type: Date, required: true },
    StartStationHist: { type: String, required: true },
    EndStationHist: { type: String, required: true },
    period: {
      type: String,
      enum: ["Monthly", "Quarterly"],
    },
    classs: {
      type: String,
      enum: ["First", "Second"],
    },
    user : {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    status : {
      type : String,
      default : 'Pending'
    }
  },
  { timestamps: true }
);

export default mongoose.model("History", historySchema);
