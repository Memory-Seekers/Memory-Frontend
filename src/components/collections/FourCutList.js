import { FlatList } from 'react-native';
import FourCutListItem from './FourCutListItem';

const FourCutList = ({ data }) => {
  return (
    <FlatList
      style={{ flexGrow: 1 }}
      windowSize={3}
      numColumns={2}
      data={data}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 8 }}
      keyExtractor={(item) => item.photo4CutId.toString()}
      renderItem={({ item }) => <FourCutListItem item={item} />}
    />
  );
};

export default FourCutList;
