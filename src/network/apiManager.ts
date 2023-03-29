import axios from 'axios';
import config from '../util/config';

export const apiManager = axios.create({
  baseURL: config.apiUrl,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiManager.interceptors.request.use(req => {
  req.params = {...req.params, api_key: config.apiKey};
  console.log('Starting Request', JSON.stringify(req, null, 2));
  return req;
});

axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});
