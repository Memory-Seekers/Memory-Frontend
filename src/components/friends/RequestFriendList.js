import { FlatList } from 'react-native';
import RequestFriendListItem from './RequestFriendListItem';

const RequestFriendList = ({ children, data }) => {
  return (
    <FlatList
      style={{ flexGrow: 1 }}
      windowSize={3}
      data={data}
      keyExtractor={(item) => item.tagId.toString()}
      renderItem={({ item }) => (
        <RequestFriendListItem item={item}>{children}</RequestFriendListItem>
      )}
    />
  );
};

export default RequestFriendList;
