import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/mainScreens/HomeScreen';
import { Image } from 'react-native';
import { GRAY, PRIMARY, WHITE } from '../styles/colors';
import { Family, Label, Title } from '../styles/fonts';
import FriendScreen from '../screens/mainScreens/FriendScreen';
import CollectionScreen from '../screens/mainScreens/CollectionScreen';
import MyPageScreen from '../screens/mainScreens/MyPageScreen';
import FriendHeaderButton from '../components/friends/FriendHeaderButton';
import { screenHorizontal } from '../styles/globalStyles';
import MyProfileHeaderRight from '../components/myProfile/MyProfileHeaderRight';

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
        contentStyle: { backgroundColor: WHITE },
        headerRightContainerStyle: { paddingRight: screenHorizontal },
        headerShadowVisible: false,
        headerTitleStyle: {
          ...Family.KR_Regular,
          ...Title.Large,
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
          headerShown: true,
          headerRight: FriendHeaderButton,
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
          headerShown: true,
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
        name="내 추억"
        component={MyPageScreen}
        options={{
          headerShown: true,
          headerRight: MyProfileHeaderRight,
          headerRightContainerStyle: { paddingRight: screenHorizontal },
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
