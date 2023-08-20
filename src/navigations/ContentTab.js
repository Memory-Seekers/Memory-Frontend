import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/mainScreens/HomeScreen';
import { Image } from 'react-native';
import { GRAY, PRIMARY } from '../styles/colors';
import { Family, Label } from '../styles/fonts';
import FriendScreen from '../screens/mainScreens/FriendScreen';
import CollectionScreen from '../screens/mainScreens/CollectionScreen';
import MyPageScreen from '../screens/mainScreens/MyPageScreen';

const Tab = createBottomTabNavigator();

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY.DEFAULT,
        tabBarInactiveTintColor: GRAY['800'],

        tabBarStyle: {
          height: 48,
          paddingBottom: 2,
          paddingTop: 4,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingHorizontal: 16,
        },
        tabBarLabelStyle: {
          ...Family.KR_Medium,
          ...(({ color, ...rest }) => rest)(Label.Small),
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarIcon: (props) => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={
                  props.focused
                    ? require('../../assets/Icons/Icon_Home_Filled.png')
                    : require('../../assets/Icons/Icon_Home_Outlined.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="친구"
        component={FriendScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={
                  props.focused
                    ? require('../../assets/Icons/Icon_Friends_Filled.png')
                    : require('../../assets/Icons/Icon_Friends_Outlined.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="컬렉션"
        component={CollectionScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={
                  props.focused
                    ? require('../../assets/Icons/Icon_Collection_Filled.png')
                    : require('../../assets/Icons/Icon_Collection_Outlined.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MY"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={
                  props.focused
                    ? require('../../assets/Icons/Icon_My_Filled.png')
                    : require('../../assets/Icons/Icon_My_Outlined.png')
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
