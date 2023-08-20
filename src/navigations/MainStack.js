import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/mainScreens/HomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
