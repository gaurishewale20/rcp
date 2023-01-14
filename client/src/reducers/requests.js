import {
    FETCH_ALL,
    FETCH_REQUEST,
    CREATE,
    APPROVE,
    DENY,
    START_LOADING,
    END_LOADING,
    SEARCH_STUDENT
} from "../constants/actionTypes";

const requestreducer = (state = { isLoading: true, requests: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_REQUEST:
      return { ...state, request: action.payload };

    case FETCH_ALL:
      return { ...state, requests: action.payload.data };
    case CREATE:
      return { ...state, requests: [...state.requests, action.payload] };

    case APPROVE:
      return {
        ...state,
        requests: [
          state.requests.map((request) =>
            request._id === action.payload._id ? action.payload : request
          ),
        ],
      };

    case DENY:
      // return {...state,
      //     requests: [state.requests.filter((request) => request._id !== action.payload)]
      // };
      return {
        ...state,
        requests: [
          state.requests.map((request) =>
            request._id === action.payload._id ? action.payload : request
          ),
        ],
      };

    default:
      return state;
  }
};

export default requestreducer;
