import { StyleSheet, Text, View } from 'react-native';

const FriendListScreen = () => {
  return (
    <View style={styles.ViewContainer}>
      <Text>friend</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FriendListScreen;
