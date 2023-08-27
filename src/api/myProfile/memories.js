import apiClient from '../apiClient';

// 내 추억일지 조회
export const getMyMemories = async () => {
  const endPoint = '/memories/list';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 추억일지 태그된 친구 조회
export const getTaggedFreindsMemories = async (memoryId) => {
  const endPoint = '/memories/taggedFriendList';

  try {
    const response = await apiClient.get(endPoint, {
      params: {
        memoryId: memoryId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
