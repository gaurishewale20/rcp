import * as actionType from '../constants/actionTypes';

const forgotReducer = (state = { forgotData: null }, action) => {
  switch (action.type) {
    case actionType.FORGOT:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    default:
      return state;
  }
};

export default forgotReducer;
