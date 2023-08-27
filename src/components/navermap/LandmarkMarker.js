import { Marker } from 'react-native-nmap';
import { Image } from 'react-native';

const LandmarkMarker = ({
  landmarks,
  onClick,
  selectedLandmark,
  setSelectedLandmark,
}) => {
  return landmarks?.map((landmark) => {
    const size =
      selectedLandmark && selectedLandmark === landmark.landmarkId ? 48 : 32;

    return (
      <Marker
        key={landmark.landmarkId}
        width={size}
        height={size}
        coordinate={{
          latitude: landmark.landLatitude,
          longitude: landmark.landLongitude,
        }}
        onClick={() => {
          onClick();
          setSelectedLandmark(landmark.landmarkId);
        }}
      >
        {selectedLandmark && selectedLandmark === landmark.landmarkId ? (
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../../assets/Icons/Icon_LandmarkPin_Selected.png')}
          />
        ) : (
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../../assets/Icons/Icon_LandmarkPin_Unselected.png')}
          />
        )}
      </Marker>
    );
  });
};

export default LandmarkMarker;
