import apiClient from '../apiClient';

export const postSignIn = async (email, password) => {
  const endPoint = '/member/login';

  try {
    const response = await apiClient.post(
      endPoint,
      {
        email: email,
        password: password,
      },
      { bypassInterceptor: true }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
