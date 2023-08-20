import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentTab from './ContentTab';
import { WHITE } from '../styles/colors';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ContentTab"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="ContentTab" component={ContentTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
