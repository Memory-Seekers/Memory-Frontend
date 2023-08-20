import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';

const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const AutomaticLoginCheck = async () => {
    const isChecked = await AsyncStorage.getItem('@AutomaticLogin');
    setIsChecked(isChecked);
  };

  AutomaticLoginCheck();

  return (
    <NavigationContainer>
      {isChecked ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
