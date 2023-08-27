import apiClient from '../apiClient';

// 아이디 검색으로 친구 조회
export const getSearchFriend = async (tagId) => {
  const endPoint = '/friends';

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

// 친구 요청
export const postRequestFriend = async (tagId) => {
  const endPoint = '/friends/request';

  try {
    const response = await apiClient.post(
      endPoint,
      {},
      {
        params: {
          tagId: tagId,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
