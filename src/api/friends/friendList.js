import apiClient from '../apiClient';

// 나의 계정 정보 조회
export const getMyAccount = async () => {
  const endPoint = '/friends/my';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 받은 친구 요청 리스트 조회
export const getReceiveFriends = async () => {
  const endPoint = '/friends/accept';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 보낸 친구 요청 리스트 조회
export const getSendFriends = async () => {
  const endPoint = '/friends/request';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 내 친구 리스트 조회
export const getMyFriends = async () => {
  const endPoint = '/friends/list';

  try {
    const response = await apiClient.get(endPoint, {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 받은 친구 요청 수락
export const postReceiveFriendAccept = async (tagId) => {
  const endPoint = '/friends/accept';

  try {
    const response = await apiClient.post(endPoint, {
      params: {
        tagId: tagId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 받은 친구 요청 거절
export const postReceiveFriendReject = async (tagId) => {
  const endPoint = '/friends/reject';

  try {
    const response = await apiClient.delete(endPoint, {
      params: {
        tagId: tagId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// 보낸 친구 요청 취소
export const postSendFriendCancel = async (tagId) => {
  const endPoint = '/friends/request';

  try {
    const response = await apiClient.post(endPoint, {
      params: {
        tagId: tagId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};