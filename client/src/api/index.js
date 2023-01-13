import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
    }

    return req;
});




export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchPendingRequests = () => API.get('/pass/pending');
export const fetchPastRequests = () => API.get('/pass/past');
export const approveRequest = (request) => API.patch('/pass/approve', request);
export const denyRequest = (request) =>API.patch('/pass/deny', request);
