import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";

import { useDispatch} from "react-redux";
import { getRequests } from "../../actions/requests";
import PastRequest from './PastRequest';

const PastRequests = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRequests("past"));
  }, [dispatch]);

  return (
    <div className='container'>
        <h1>Past Requests</h1>
        <PastRequest/>
    </div>
  );
};

export default PastRequests;
