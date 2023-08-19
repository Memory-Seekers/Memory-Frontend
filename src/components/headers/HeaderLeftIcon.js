import { useNavigation } from '@react-navigation/native';
import { Image, Pressable } from 'react-native';

const HeaderLeftIcon = ({ canGoBack }) => {
  const navigation = useNavigation();

  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable onPress={navigation.goBack}>
      <Image
        style={{
          width: 24,
          height: 24,
        }}
        source={require('../../../assets/Icons/Icon_Back.png')}
      />
    </Pressable>
  );
};

export default HeaderLeftIcon;
