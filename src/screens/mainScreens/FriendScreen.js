import { Button, Text, View } from 'react-native';
import { WHITE } from '../../styles/colors';

const FriendScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}
    >
      <Text>FriendScreen</Text>
    </View>
  );
};

export default FriendScreen;
