import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userData, setUserData] = useState("");

  const fetchStatus = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/user/searchStudent/:id",
      {
        params: {
          id: user.result.regId,
        },
      }
    );
    //console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchStatus();
  });

  return (
    <div>
      <h1>Status of the current request</h1>
      {userData?(
        <>
            <h3>Status : {userData[0].currentPass.status}</h3>
        </>
      ):("You have not yet made any concession request")}
    </div>
  );
};

export default History;
