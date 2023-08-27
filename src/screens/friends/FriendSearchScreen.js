import { Button, Text, View } from 'react-native';
import { WHITE } from '../../styles/colors';
import FriendSearchBox from '../../components/friends/FriendSearchBox';
import { StyleSheet } from 'react-native';
import { screenHorizontal } from '../../styles/globalStyles';
import { useState } from 'react';
import {
  getSearchFriend,
  postRequestFriend,
} from '../../api/friends/friendSearch';
import RequestFriendList from '../../components/friends/RequestFriendList';
import FilledButton from '../../components/buttons/FilledButton';

const FriendSearchScreen = ({ navigation }) => {
  const [inputTagId, setInputTagId] = useState('');
  const [searchFriends, setSearchFriends] = useState([]);

  return (
    <View style={styles.container}>
      <FriendSearchBox
        placeholder={'찾고자 하는 친구의 아이디를 입력해 주세요.'}
        onChangeText={(text) => setInputTagId(text.trim())}
        onSubmitEditing={() =>
          getSearchFriend(inputTagId)
            .then((response) => setSearchFriends(response))
            .catch((error) => console.error(error))
        }
        value={inputTagId}
      />

      <View style={{ marginTop: 16 }}>
        <RequestFriendList data={searchFriends}>
          {(item) => (
            <FilledButton
              title={'친구 요청'}
              disabledTitle={'요청 완료'}
              onPress={() => postRequestFriend(item.tagId)}
            />
          )}
        </RequestFriendList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: screenHorizontal,
  },
});

export default FriendSearchScreen;
