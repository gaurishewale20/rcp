import mongoose from "mongoose";

const historySchema = mongoose.Schema({
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
});

export default mongoose.model("History", historySchema);
