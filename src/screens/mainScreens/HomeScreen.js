import { StyleSheet, View } from 'react-native';
import { WHITE } from '../../styles/colors';
import MapView from '../../components/navermap/MapView';
import FloatingButton from '../../components/buttons/FloatingButton';
import { screenHorizontal } from '../../styles/globalStyles';
import MemoriesFloatingButton from '../../components/navermap/MemoriesFloatingButton';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [isObserving, setIsObserving] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}
    >
      <MapView />

      <MemoriesFloatingButton
        activation={isObserving}
        onPress={() => {
          setIsObserving(!isObserving);
        }}
      />

      <View style={styles.FloatingContainer}>
        <FloatingButton
          icon={
            // isCurrentWatch || isobserving
            require('../../../assets/Icons/Icon_Gps_Outlined.png')
          }
          onPress={() => {
            // !isObserving && SetIsCurrentWatch(!isCurrentWatch);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FloatingContainer: {
    position: 'absolute',
    bottom: 24,
    right: screenHorizontal,
  },
});

export default HomeScreen;
