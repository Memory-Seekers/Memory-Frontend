import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import { PRIMARY, GRAY, WHITE } from '~/styles/colors';
import { Family, Label, Title } from '~/styles/fonts';
import { screenHorizontal } from '~/styles/globalStyles';

import HomeScreen from '@screens/contentTab/HomeScreen';
import FriendListScreen from '@screens/contentTab/FriendListScreen';
import CollectionScreen from '@screens/contentTab/CollectionScreen';
import MyPageScreen from '@screens/contentTab/MyPageScreen';

const Tab = createBottomTabNavigator();

const ICON_PATHS = {
  Home: {
    Filled: require('@assets/icons/Icon_Home_Filled.png'),
    Outlined: require('@assets/icons/Icon_Home_Outlined.png'),
  },
  Friends: {
    Filled: require('@assets/icons/Icon_Friends_Filled.png'),
    Outlined: require('@assets/icons/Icon_Friends_Outlined.png'),
  },
  Collection: {
    Filled: require('@assets/icons/Icon_Collection_Filled.png'),
    Outlined: require('@assets/icons/Icon_Collection_Outlined.png'),
  },
  My: {
    Filled: require('@assets/icons/Icon_My_Filled.png'),
    Outlined: require('@assets/icons/Icon_My_Outlined.png'),
  },
};

const getIconPath = (name, focused) => {
  const status = focused ? 'Filled' : 'Outlined';
  return ICON_PATHS[name][status];
};

const TabBarIcon = ({ name, focused }) => {
  const icon = getIconPath(name, focused);
  return <Image style={{ width: 24, height: 24 }} source={icon} />;
};

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY.DEFAULT,
        tabBarInactiveTintColor: GRAY['700'],
        tabBarStyle: {
          height: 56,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingHorizontal: screenHorizontal,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarLabelStyle: {
          marginBottom: 8,
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
          tabBarIcon: (props) => <TabBarIcon name="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="친구"
        component={FriendListScreen}
        options={{
          headerShown: true,
          tabBarIcon: (props) => <TabBarIcon name="Friends" {...props} />,
        }}
      />
      <Tab.Screen
        name="컬렉션"
        component={CollectionScreen}
        options={{
          headerShown: true,
          tabBarIcon: (props) => <TabBarIcon name="Collection" {...props} />,
        }}
      />
      <Tab.Screen
        name="내 추억"
        component={MyPageScreen}
        options={{
          headerShown: true,
          tabBarIcon: (props) => <TabBarIcon name="My" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
