import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/contentTab/HomeScreen';
import FriendListScreen from '../screens/contentTab/FriendListScreen';
import CollectionScreen from '../screens/contentTab/CollectionScreen';
import MyPageScreen from '../screens/contentTab/MyPageScreen';

const Tab = createBottomTabNavigator();

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 48,
          justifyContent: 'center',
          paddingBottom: 3,
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="친구"
        component={FriendListScreen}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="컬렉션"
        component={CollectionScreen}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="내 프로필"
        component={MyPageScreen}
        options={{
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
