import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-startemy.onrender.com',
  timeout: 5000,
});
