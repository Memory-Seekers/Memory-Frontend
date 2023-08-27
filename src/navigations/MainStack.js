import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentTab from './ContentTab';
import { WHITE } from '../styles/colors';
import { Family, Title } from '../styles/fonts';
import FriendSearchScreen from '../screens/friends/FriendSearchScreen';
import HeaderLeftIcon from '../components/headers/HeaderLeftIcon';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ContentTab"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
        headerShadowVisible: false,
        headerLeft: HeaderLeftIcon,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...Family.KR_Regular,
          ...Title.Large,
        },
      }}
    >
      <Stack.Screen name="ContentTab" component={ContentTab} />
      <Stack.Screen
        name="FriendSearchScreen"
        component={FriendSearchScreen}
        options={{
          title: '친구 추가',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
