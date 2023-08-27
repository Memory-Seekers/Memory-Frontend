import { StyleSheet, View } from 'react-native';
import { WHITE } from '../../styles/colors';
import DiaryList from '../../components/myProfile/DiaryList';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getMyMemories } from '../../api/myProfile/memories';

const MyPageScreen = ({ navigation }) => {
  const [myMemories, setMyMemories] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getMyMemories()
        .then((response) => setMyMemories(response))
        .catch((error) => console.error(error));
    }, [])
  );

  return (
    <View style={styles.container}>
      <DiaryList data={myMemories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default MyPageScreen;
