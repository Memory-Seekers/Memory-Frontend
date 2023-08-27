import { Image, Pressable, StyleSheet, View } from 'react-native';
import { BLACK } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import LogoutHeaderButton from './LogoutHeaderButton';

const MyProfileHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={{ marginRight: 16 }}
        hitSlop={8}
        // onPress={() => navigation.navigate('MemoriesSearchScreen')}>
        onPress={() => console.log('검색하기')}
      >
        <Image
          style={styles.icon}
          source={require('../../../assets/Icons/Icon_Search.png')}
        />
      </Pressable>

      <LogoutHeaderButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: BLACK,
  },
});

export default MyProfileHeaderRight;
