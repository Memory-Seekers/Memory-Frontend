import apiClient from '../apiClient';

// 내 추억네컷 조회
export const getMyFourCut = async () => {
  const endPoint = '/collections';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 내가 태그된 추억네컷 조회
export const getTaggedFourCut = async (myTagId) => {
  const endPoint = '/collections/' + myTagId;

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};
