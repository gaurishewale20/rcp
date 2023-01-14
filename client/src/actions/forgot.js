import { FORGOT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const forgot = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.forgot(formData);

    dispatch({ type: FORGOT, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const resetpw = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.resetpw(formData);

    dispatch({ type: FORGOT, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};