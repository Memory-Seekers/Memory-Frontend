import { FlatList } from 'react-native';
import FriendListItem from './FriendListItem';

const FriendList = ({ data }) => {
  return (
    <FlatList
      style={{ flexGrow: 1 }}
      windowSize={3}
      data={data}
      keyExtractor={(item) => item.tagId.toString()}
      renderItem={({ item }) => <FriendListItem item={item} />}
    />
  );
};

export default FriendList;
