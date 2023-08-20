import { Button, Text, View } from 'react-native';
import { WHITE } from '../../styles/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}
    >
      <Text>HomeScreen</Text>
      <Button title="Auth" onPress={() => navigation.replace('SignInScreen')} />
    </View>
  );
};

export default HomeScreen;
