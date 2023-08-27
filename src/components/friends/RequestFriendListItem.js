import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Family, Label } from '../../styles/fonts';
import { GRAY } from '../../styles/colors';

const RequestFriendListItem = memo(({ children, item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.friendContainer}>
        <Text style={styles.nickNameText}>{item.nickName}</Text>
        <Text style={styles.tagIdText}>#{item.tagId}</Text>
      </View>
      <View style={styles.apiContainer}>{children}</View>
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
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  nickNameText: {
    ...Family.KR_Medium,
    ...Label.Large,
  },
  tagIdText: {
    ...Family.KR_Medium,
    ...Label.Small,
    color: GRAY['400'],
    marginLeft: 8,
  },
  apiContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default RequestFriendListItem;
