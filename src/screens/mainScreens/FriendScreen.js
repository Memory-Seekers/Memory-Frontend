import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GRAY, PRIMARY, WHITE } from '../../styles/colors';
import { screenHorizontal } from '../../styles/globalStyles';
import { Family, Label } from '../../styles/fonts';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  getMyAccount,
  getMyFriends,
  getReceiveFriends,
  getSendFriends,
} from '../../api/friends/friendList';
import Toast from 'react-native-toast-message';
import RequestFriendList from '../../components/friends/RequestFriendList';
import FriendListTitle from '../../components/friends/FriendListTitle';
import FriendList from '../../components/friends/FriendList';

const FriendScreen = ({ navigation }) => {
  const [myAccount, setMyAccount] = useState([]);
  const [isExpand, setIsExpand] = useState({
    Receive: false,
    Send: false,
    Friend: false,
  });

  const [receiveFriends, setReceiveFriends] = useState([]);
  const [sendFriends, setSendFriends] = useState([]);
  const [myFriends, setMyFriends] = useState([]);

  const [isReload, setIsReload] = useState(true);

  const ToastShow = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
      position: 'bottom',
    });
  };

  const fetchData = async () => {
    await getMyAccount()
      .then((response) => setMyAccount(() => [response]))
      .catch((error) => {
        console.error(error);
        ToastShow('error', '내 정보 조회를 실패하였습니다.');
      });

    if (isReload) {
      console.log('test');

      getReceiveFriends()
        .then((response) => setReceiveFriends(response))
        .catch((error) => {
          console.error(error);
          ToastShow('error', '요청된 친구 조회를 실패하였습니다.');
        });
      getSendFriends()
        .then((response) => setSendFriends(response))
        .catch((error) => {
          console.error(error);
          ToastShow('error', '요청한 친구 조회를 실패하였습니다.');
        });
      getMyFriends()
        .then((response) => setMyFriends(response))
        .catch((error) => {
          console.error(error);
          ToastShow('error', '내 친구 조회를 실패하였습니다.');
        });

      setIsReload(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View>
        <FriendList data={myAccount} />
      </View>

      <FriendListTitle
        title={'받은 친구 요청'}
        name={'Receive'}
        isExpand={isExpand}
        setIsExpand={setIsExpand}
      />

      {isExpand.Receive && (
        <View>
          <RequestFriendList data={receiveFriends}>
            <TouchableOpacity
              style={{ paddingRight: 8 }}
              onPress={() => {
                console.log('수락');
                setIsReload(true);
              }}
            >
              <Text style={[styles.apiText, { color: PRIMARY.DEFAULT }]}>
                수락
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('거절');
                setIsReload(true);
              }}
            >
              <Text style={styles.apiText}>거절</Text>
            </TouchableOpacity>
          </RequestFriendList>
        </View>
      )}

      <FriendListTitle
        title={'보낸 친구 요청'}
        name={'Send'}
        isExpand={isExpand}
        setIsExpand={setIsExpand}
      />

      {isExpand.Send && (
        <View>
          <RequestFriendList data={sendFriends}>
            <TouchableOpacity
              onPress={() => {
                console.log('취소');
                setIsReload(true);
              }}
            >
              <Text style={styles.apiText}>취소</Text>
            </TouchableOpacity>
          </RequestFriendList>
        </View>
      )}

      <FriendListTitle
        title={'친구'}
        name={'Friend'}
        isExpand={isExpand}
        setIsExpand={setIsExpand}
      />

      {isExpand.Friend && (
        <View>
          <FriendList data={myFriends} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: screenHorizontal,
  },
  accountContainer: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nickNameText: {
    ...Family.KR_Medium,
    ...Label.Large,
  },
  tagIdText: {
    ...Family.KR_Medium,
    ...Label.Small,
    color: GRAY.DEFAULT,
  },
  apiText: {
    ...Family.KR_Medium,
    ...Label.Small,
    color: GRAY.DEFAULT,
    paddingLeft: 8,
    paddingVertical: 8,
  },
});

export default FriendScreen;
