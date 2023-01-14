import { combineReducers } from 'redux';


import auth from './auth';
import requests from './requests';

import forgot from './forgot';

const reducers = combineReducers({
    auth,requests,
    forgot: forgot  });

export default reducers;
