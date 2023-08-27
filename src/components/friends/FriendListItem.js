import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Family, Label } from '../../styles/fonts';
import { GRAY } from '../../styles/colors';

const FriendListItem = memo(({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nickNameText}>{item.nickName}</Text>
      <Text style={styles.tagIdText}>#{item.tagId}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
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
});

export default FriendListItem;
