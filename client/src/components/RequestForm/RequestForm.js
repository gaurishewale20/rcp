import React, { useReducer, useState } from "react";
import "./RequestForm.css";

const formReducer = (state, e) => {
  if (e.reset) {
    return {
      TicketNo: "",
      StartDateHist: "",
      EndDateHist: "",
      StartStationHist: "",
      EndStationHist: "",
      period: "",
      classs: "",
      StartDateCurr: "",
      StartStationCurr: "",
      EndStationCurr: "",
    };
  }

  return {
    ...state,
    [e.name]: e.value,
  };
};

const addPass = async (formData) => {
  await fetch("http://localhost:5000/pass", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

const RequestForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [TicketNoErr, setTicketNoErr] = useState("");
  const [HistDateErr, setHistDateErr] = useState("");

  formData.profile = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted the form");
    addPass(formData);
    setFormData({ reset: true });
  };

  const handleChange = (e) => {

    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
    const { name, value } = e.target;
    const StartDateHist = '';
    const EndDateHist = '';

    switch (name) {
      case "TicketNo":
        setTicketNoErr(
          value.length === 4 ? "" : "Ticket No should be exactly 4 digits"
        );
        break;

      default:
        break;
    }
  };

  return (
    <div class="container pass_container">
      {/* <div>
        You are submitting the following:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}>
              <strong>{name}</strong>: {value.toString()}
            </li>
          ))}
        </ul>
      </div> */}
      <h1 className="concession_heading text-center">Concession Form</h1>
      <form onSubmit={handleSubmit}>
        <h4 className="pass_heading">Previous Pass Details</h4>
        <fieldset>
          <label>
            <p>Ticket No.</p>
            <input
              type="text"
              name="TicketNo"
              value={formData.TicketNo || ""}
              onChange={handleChange}
            ></input>
          </label>
          {TicketNoErr.length > 0 && <span>{TicketNoErr}</span>}
          <label>
            <p>Starting Date</p>
            <input
              type="date"
              name="StartDateHist"
              value={formData.StartDateHist || ""}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            <p>Ending Date</p>
            <input
              type="date"
              name="EndDateHist"
              value={formData.EndDateHist || ""}
              onChange={handleChange}
            ></input>
          </label>
          {HistDateErr.length > 0 && <span>{HistDateErr}</span>}
          <label>
            <p>Start Station</p>
            <input
              type="text"
              name="StartStationHist"
              value={formData.StartStationHist || ""}
              onChange={handleChange}
              
            ></input>
          </label>
          <label>
            <p>End Station</p>
            <input
              type="text"
              name="EndStationHist"
              value={formData.EndStationHist || ""}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            <p>Period</p>
            <select
              name="periodHist"
              value={formData.periodHist || ""}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
            </select>
          </label>
          <label>
            <p>Class</p>
            <select
              name="classsHist"
              value={formData.classsHist || ""}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
            </select>
          </label>
        </fieldset>

        <h4 className="pass_heading">Current Pass Details</h4>
        <fieldset>
          <label>
            <p>Starting Date</p>
            <input
              type="date"
              name="StartDateCurr"
              value={formData.StartDateCurr || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
          <label>
            <p>Start Station</p>
            <input
              type="text"
              name="StartStationCurr"
              value={formData.StartStationCurr || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
          <label>
            <p>End Station</p>
            <input
              type="text"
              name="EndStationCurr"
              value={formData.EndStationCurr || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
          <label>
            <p>Period</p>
            <select
              name="periodCurr"
              value={formData.periodCurr || ""}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
            </select>
          </label>
          <label>
            <p>Class</p>
            <select
              name="classsCurr"
              value={formData.classsCurr || ""}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
            </select>
          </label>
        </fieldset>
        <button type="submit" className="sub">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
