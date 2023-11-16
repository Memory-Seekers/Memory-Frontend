import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentTab from './ContentTab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContentTab"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '400',
        },
      }}
    >
      <Stack.Screen name={'ContentTab'} component={ContentTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
