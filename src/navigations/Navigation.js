import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
