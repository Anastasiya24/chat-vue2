import axios from 'axios';

axios.create({
  timeout: 200000,
});

axios.defaults.baseURL = 'https://chat-api-955e23.herokuapp.com';

const setHeaders = (headers) => {
  const defaultHeader = { 'Content-Type': 'application/json' };
  if (headers) return Object.assign(defaultHeader, headers);
  return defaultHeader;
};

export const get = (url, headers) => {
  return axios.get(`${url}`, setHeaders(headers));
};

export const post = (url, data, headers) => {
  return axios.post(`${url}`, data, setHeaders(headers));
};
