import AsyncStorage from '@react-native-community/async-storage';
import * as Keychain from 'react-native-keychain';
import apiClient from './apiClient';

export const postReissueAccessToken = async (refreshToken) => {
  const endPoint = '/member/reissueAccessToken';

  try {
    const response = await apiClient.post(endPoint, {
      headers: {
        'REFRESH-TOKEN': refreshToken,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const storeAccessToken = async (token) => {
  try {
    await AsyncStorage.setItem('@AccessToken', token);
  } catch (error) {
    console.error('Failed to save the token to storage', error);
  }
};

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('@AccessToken');
  } catch (e) {
    console.error('Failed to fetch the token from storage', e);
  }
};

export const storeRefreshToken = async (token) => {
  try {
    await Keychain.setGenericPassword('refreshToken', token);
  } catch (error) {
    console.log('Error storing the refresh token', error);
  }
};

export const getRefreshToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return credentials.password;
    }
  } catch (error) {
    console.log('Error getting the refresh token', error);
  }
  return null;
};
