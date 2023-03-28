import axios from 'axios';
import config from '../util/config';

export const apiManager = axios.create({
  baseURL: config.apiUrl,
  timeout: 30000,
});

apiManager.interceptors.request.use(req => {
  req.params = {...req.params, api_key: config.apiKey};
  return req;
});
