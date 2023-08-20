import apiClient from '../apiClient';

export const postSignUp = async (tagId, email, password, nickName) => {
  const endPoint = '/member/join';

  try {
    const response = await apiClient.post(endPoint, {
      tagId: tagId,
      email: email,
      password: password,
      nickName: nickName,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getIdConfirm = async (tagId) => {
  const endPoint = '/member/join/exists';

  try {
    const response = await apiClient.get(endPoint, {
      params: {
        tagId: tagId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postEmailJoinConfirm = async (email) => {
  const endPoint = '/member/emailConfirmJoin';

  try {
    const response = await apiClient.post(endPoint, {
      params: {
        email: email,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
