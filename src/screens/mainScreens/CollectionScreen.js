import { Button, Text, View } from 'react-native';
import { WHITE } from '../../styles/colors';

const CollectionScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}
    >
      <Text>CollectionScreen</Text>
    </View>
  );
};

export default CollectionScreen;
