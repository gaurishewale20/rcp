import { combineReducers } from 'redux';


import auth from './auth';
import requests from './requests';

const reducers = combineReducers({
    auth,requests });

export default reducers;
