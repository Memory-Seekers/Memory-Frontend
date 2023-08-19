import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import { WHITE } from '../styles/colors';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import HeaderLeftIcon from '../components/headers/HeaderLeftIcon';
import { Family, Title } from '../styles/fonts';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
        headerShadowVisible: false,
        headerLeft: HeaderLeftIcon,
        headerTitleStyle: {
          ...Family.KR_Regular,
          ...Title.Large,
        },
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTitle: '회원가입',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
