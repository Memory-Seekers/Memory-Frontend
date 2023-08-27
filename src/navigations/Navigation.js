import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-community/async-storage';
import {
  getAccessToken,
  getRefreshToken,
  postReissueAccessToken,
  storeAccessToken,
} from '../api/token';
import { useAuth } from '../contexts/AuthContext';
import jwtDecode from 'jwt-decode';

const Navigation = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);

      return Date.now() / 1000 > decoded.exp;
    } catch (error) {
      return true;
    }
  };

  const AutomaticLoginCheck = async () => {
    const isChecked = await AsyncStorage.getItem('@AutomaticLogin');

    if (isChecked === 'true') {
      const accessToken = await getAccessToken();
      if (accessToken) {
        if (isTokenExpired(accessToken)) {
          const refreshToken = await getRefreshToken();

          await postReissueAccessToken(refreshToken)
            .then((response) => {
              storeAccessToken(response.accessToken);
              setIsLoggedIn(true);
            })
            .catch((error) => {
              console.log('AutomaticLogin postReissueAccessToken: ', error);
            });
        } else {
          setIsLoggedIn(true);
        }
        console.log(accessToken);
      }
    }
  };

  AutomaticLoginCheck();

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
