import { StyleSheet, Text, View } from 'react-native';

const CollectionScreen = () => {
  return (
    <View style={styles.ViewContainer}>
      <Text>collection</Text>
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

export default CollectionScreen;
