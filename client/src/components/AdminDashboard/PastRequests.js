import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../actions/requests";
import Request from "../Request/Request";

const PastRequests = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRequests("past"));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Pending Requests</h1>
      <Request />
    </div>
  );
};

export default PastRequests;
