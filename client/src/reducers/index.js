import { combineReducers } from 'redux';


import auth from './auth';
import forgot from './forgot';

const reducers = combineReducers({ 
    auth: auth,
    forgot: forgot });

export default reducers;
