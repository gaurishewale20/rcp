import mongoose from "mongoose";

const historySchema = mongoose.Schema(
  {
    TicketNo: { type: String },
    StartDateHist: { type: Date },
    EndDateHist: { type: Date },
    StartStationHist: { type: String },
    EndStationHist: { type: String },
    periodHist: {
      type: String,
      enum: ["Monthly", "Quarterly"],
    },
    classsHist: {
      type: String,
      enum: ["First", "Second"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("History", historySchema);
