import * as api from '../api/index.js';
import { UPDATE_PROFILE } from '../constants/actionTypes';

export const updateProfile = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.updateProfile(id,formData);
  
      dispatch({ type: UPDATE_PROFILE, payload: data });
    } catch (error) {
      console.log(error);
    }
};
  