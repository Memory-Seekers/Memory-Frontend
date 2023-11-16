import { StyleSheet, View } from 'react-native';

const MyPageScreen = () => {
  return <View style={styles.ViewContainer}>mypage</View>;
};

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPageScreen;
