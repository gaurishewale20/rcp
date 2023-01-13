import Current from "../models/current.js";
import History from "../models/history.js";

export const addPass = async (req, res) => {
  const {
    profile,
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    period,
    classs,
  } = req.body;

  const { StartDateCurr, EndDateCurr, StartStationCurr, EndStationCurr } =
    req.body;

  const histPass = new History({
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    period,
    classs,
  });

  histPass.user = profile.result._id;
  await histPass.save();

  const currPass = new Current({
    StartDateCurr,
    EndDateCurr,
    StartStationCurr,
    EndStationCurr,
  });

  currPass.user = profile.result._id;
  await currPass.save();

  console.log("Saved Pass");
};
