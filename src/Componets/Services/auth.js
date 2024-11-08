import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://instagram-backend-ugd3.onrender.com/api',
});

export const login = async (credentials) => {
  const response = await authApi.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await authApi.post('/auth/register', userData);
  return response.data;
};

export const logout = async () => {
  await authApi.post('/auth/logout');
};
import { postData } from './api';

export const login = async (credentials) => {
  return await postData('auth/login', credentials);
};

export const register = async (userData) => {
  return await postData('auth/register', userData);
  
};
