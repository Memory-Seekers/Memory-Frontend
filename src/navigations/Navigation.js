import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import ContentTab from './ContentTab';
import { Text } from 'react-native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ContentTab />
    </NavigationContainer>
  );
};

export default Navigation;
