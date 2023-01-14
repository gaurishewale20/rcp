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
  try {
    const { data } = await api.approveRequest(request);
    dispatch({ type: APPROVE, payload: request._id });
  } catch (error) {
    console.log(error);
  }
};

export const denyRequest = (request) => async (dispatch) => {
  try {
    const { data } = await api.denyRequest(request);
    dispatch({ type: DENY });
  } catch (error) {
    console.log(error);
  }
};

export const searchStudent = (ID) => async (dispatch) => {
  try {
    const { data } = await api.searchStudent(ID);
    dispatch({ type: SEARCH_STUDENT });
  } catch (error) {
    console.log(error);
  }
};
