import axios from 'axios';
import { API_URL } from '@env';
import {
  getAccessToken,
  getRefreshToken,
  postReissueAccessToken,
  storeAccessToken,
} from './token';
import jwtDecode from 'jwt-decode';

const apiClient = axios.create({
  baseURL: API_URL,
});

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);

    return Date.now() / 100 > decoded.exp;
  } catch (error) {
    return true;
  }
};

apiClient.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      if (isTokenExpired(token)) {
        const refreshToken = await getRefreshToken();

        await postReissueAccessToken(refreshToken)
          .then((response) => {
            storeAccessToken(response.getAccessToken);
            token = response.getAccessToken;
          })
          .catch((error) => {
            console.error('postReissueAccessToken: ', error);
          });
      }
      config.headers['token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
