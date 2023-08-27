import { memo } from 'react';
import { Dimensions } from 'react-native';
import { Image, View } from 'react-native';

const FourCutListItem = memo(({ item }) => {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 2;
  const gap = 8;

  const availableSpace = screenWidth - (numColumns - 1) * gap;
  const itemWidth = availableSpace / numColumns;

  return (
    <View style={{}}>
      <Image
        style={{ width: itemWidth, height: 240 }}
        source={{ uri: item?.photo4Cut }}
      />
    </View>
  );
});

export default FourCutListItem;
