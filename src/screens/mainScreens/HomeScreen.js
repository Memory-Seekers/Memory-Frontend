import { View } from 'react-native';
import { WHITE } from '../../styles/colors';
import MapView from '../../components/navermap/MapView';

const HomeScreen = ({ navigation }) => {
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
    </View>
  );
};

export default HomeScreen;
