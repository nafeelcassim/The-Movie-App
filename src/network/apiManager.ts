import axios, {AxiosInstance} from 'axios';
import {appConstants} from '../util/constants';

const apiManager: AxiosInstance = axios.create({
  baseURL: appConstants.appBaseUrl,
});

apiManager.interceptors.request.use(req => {
  req.params = {...req.params, api_key: appConstants.apiKey};
  return req;
});
export default apiManager;
