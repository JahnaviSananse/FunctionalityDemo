import axios from 'axios';
import {BASE_URL} from '../constants/api';
let AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
