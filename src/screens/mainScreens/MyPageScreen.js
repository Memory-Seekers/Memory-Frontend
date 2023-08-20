import { Button, Text, View } from 'react-native';
import { WHITE } from '../../styles/colors';

const MyPageScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}
    >
      <Text>MyPageScreen</Text>
    </View>
  );
};

export default MyPageScreen;
