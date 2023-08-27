import { FlatList } from 'react-native';
import DiaryListItem from './DiaryListItem';

const DiaryList = ({ data }) => {
  return (
    <FlatList
      style={{ flex: 1, marginTop: 24 }}
      windowSize={3}
      data={data}
      keyExtractor={(item) => item.memoryId.toString()}
      renderItem={({ item }) => <DiaryListItem item={item} />}
    />
  );
};

export default DiaryList;
