import { View } from 'react-native';
import { Marker } from 'react-native-nmap';
// import { useMemoriesContext } from "../../contexts/MemoriesContext";

const MyLocationMarker = () => {
  // const { myLocation } = useMemoriesContext();

  return (
    <Marker
      coordinate={{
        latitude: 37.579917,
        longitude: 126.967041,
      }}
      image={require('../../../assets/Icons/Icon_MyLocation.png')}
      width={24}
      height={24}
    />
  );
};

export default MyLocationMarker;
