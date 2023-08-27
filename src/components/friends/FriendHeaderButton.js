import { useNavigation } from '@react-navigation/native';
import { Image, Pressable } from 'react-native';

const FriendHeaderButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('FriendSearchScreen')}>
      <Image
        style={{ width: 24, height: 24 }}
        source={require('../../../assets/Icons/Icon_Add.png')}
      />
    </Pressable>
  );
};

export default FriendHeaderButton;
