import Current from "../models/current.js";
import History from "../models/history.js";
import User from "../models/user.js";

export const addPass = async (req, res) => {
  
  const {
    profile,
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    periodHist,
    classsHist,
  } = req.body;

  const {
    StartDateCurr,
    StartStationCurr,
    EndStationCurr,
    periodCurr,
    classsCurr,
  } = req.body;
  const user = await User.findById(profile.result._id);
  const histPass = new History({
    TicketNo,
    StartDateHist,
    EndDateHist,
    StartStationHist,
    EndStationHist,
    periodHist,
    classsHist,
  });

  histPass.user = profile.result._id;
  if (TicketNo !== "") {
    const histPassSaved = await histPass.save();
    user.historyPass.push(histPassSaved._id);
  }

  const currPass = new Current({
    StartDateCurr,
    StartStationCurr,
    EndStationCurr,
    periodCurr,
    classsCurr,
  });

  currPass.user = profile.result._id;
  const currPassSaved = await currPass.save();
  
  user.currentPass = currPassSaved._id;
  await user.save();
};

export const getPendingRequests = async (req, res) => {
  try {
    const total = await Current.countDocuments({});
    // sorting because we want the posts from newest to oldest. -1 means sort in descending order
    const requests = await Current.find().sort({ _id: -1 });
    res.status(200).json({ data: requests });  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPastRequests = async (req, res) => {
  try {
    const total = await Current.countDocuments({});
    // sorting because we want the posts from newest to oldest. -1 means sort in descending order
    const requests = await Current.find({status:{$in:["Approved", "Denied", "approved","denied"]}}).sort({ _id: -1 });
    res.status(200).json({ data: requests  });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const approveRequest = async (req, res) => {
  try {
    const {
      _id,
      status,
      StartDateCurr,
      EndDateCurr,
      StartStationCurr,
      EndStationCurr,
      user,
      createdAt,
      updatedAt,
    } = req.body;

    // if (!mongoose.Types.ObjectId.isValid(_id))
    //   return res.status(404).send(`No post with id: ${_id}`);

    updatedEvent = await Current.findByIdAndUpdate(
      _id,
      { $set: { status: "Approved" } },
      {
        new: true,
      }
      // function (err, result) {
      //   if (err) {
      //     console.log(err);
      //     res.send(err);
      //   } else {
      //     console.log(result);
      //     res.send(result);
      //   }
      // }
    );

    console.log(updatedEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const denyRequest = async (req, res) => {
  console.log(req.body);
  try {
    const {
      _id,
      status,
      StartDateCurr,
      EndDateCurr,
      StartStationCurr,
      EndStationCurr,
      user,
      createdAt,
      updatedAt,
    } = req.body;

    // if (!mongoose.Types.ObjectId.isValid(_id))
    //   return res.status(404).send(`No post with id: ${_id}`);

    updatedEvent = await Current.findByIdAndUpdate(
      _id,
      { $set: { status: "Denied" } },
      {
        new: true,
      }
    );

    console.log(updatedEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
