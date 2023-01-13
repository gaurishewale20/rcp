import Current from "../models/current.js";
import History from "../models/history.js";

export const addPass = async (req, res) => {
  console.log(req.body);
  const {
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
  await histPass.save();

  const currPass = new Current({
    StartDateCurr,
    EndDateCurr,
    StartStationCurr,
    EndStationCurr,
  });

  await currPass.save();

  console.log("Saved Pass");
};
