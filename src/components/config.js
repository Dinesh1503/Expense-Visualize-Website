// config.js
const BASE_URL = 'http://localhost:5000'; // Replace with the URL where your Express API is hosted
export const PYTHON_API_URL = 'http://127.0.0.1:1000/upload';

export const API_URLS = {
  register: `${BASE_URL}/users`,
  login: `${BASE_URL}/users/verify`,
  upload: `${BASE_URL}/data`,
  month: `${BASE_URL}/data/month`,
  year: `${BASE_URL}/data/year`,
  total: `${BASE_URL}/data/total`,
  userData: `${BASE_URL}/data/total`
}