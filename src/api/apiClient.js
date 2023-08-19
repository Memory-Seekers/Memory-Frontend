import axios from 'axios';
import { API_URL } from '@env';

export const apiClient = axios.create({
  baseURL: API_URL,
});
