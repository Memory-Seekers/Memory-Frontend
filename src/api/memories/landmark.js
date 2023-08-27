import apiClient from '../apiClient';

// 랜드마크 조회
export const getLandmarks = async () => {
  const endPoint = '/main/landmarks';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 랜드마크 정보 조회
export const getLandmarkInfo = async (landmarkId) => {
  const endPoint = '/main';

  try {
    const response = await apiClient.get(endPoint, {
      params: {
        landmarkId: landmarkId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
