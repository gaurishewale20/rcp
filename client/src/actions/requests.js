import {
  FETCH_ALL,
  START_LOADING,
  END_LOADING,
  APPROVE,
  DENY,
  SEARCH_STUDENT,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getRequests = (type) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    if (type == "pending") {
      const { data } = await api.fetchPendingRequests();
      console.log(data);
      dispatch({ type: FETCH_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } else {
      const { data } = await api.fetchPastRequests();
      console.log(data);
      dispatch({ type: FETCH_ALL, payload: data });
      dispatch({ type: END_LOADING });
    }
  } catch (error) {
    console.log(error);
  }
};

export const approveRequest = (request) => async (dispatch) => {
    console.log(request);
  try {
    const { data } = await api.approveRequest(request);
    console.log(request);
    dispatch({ type: APPROVE, payload: request });
  } catch (error) {
    console.log(error);
  }
};

export const denyRequest = (request) => async (dispatch) => {
    console.log(request);
  try {
    const { data } = await api.denyRequest(request);
    console.log(request);
    dispatch({ type: DENY, payload: request });
  } catch (error) {
    console.log(error);
  }
};

 export const searchStudent=()=>{};
