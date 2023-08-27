import { useEffect, useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { GRAY } from '../../styles/colors';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Family, Title, Body } from '../../styles/fonts';
import { getLandmarkInfo } from '../../api/memories/landmark';
import { screenHorizontal } from '../../styles/globalStyles';

const LandmarkBottomSheet = ({
  landmarkId,
  refRBSheet,
  setSelectedLandmark,
}) => {
  const [landmarkData, setLandmarkData] = useState(null);

  useEffect(() => {
    if (landmarkId === null) {
      return;
    }

    getLandmarkInfo(landmarkId)
      .then((response) => setLandmarkData(response))
      .catch((error) => console.error(error));
  }, [landmarkId]);

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={false}
      closeOnPressMask={true}
      height={224}
      animationType="fade"
      onClose={() => setSelectedLandmark(null)}
      customStyles={{
        wrapper: {
          backgroundColor: '#00000000',
        },
        container: {
          width: '100%',
          padding: screenHorizontal,
          borderTopWidth: 1,
          borderTopColor: GRAY['200'],
        },
      }}
    >
      {landmarkData && (
        <View style={landmarkInfoStyle.container}>
          <View style={landmarkInfoStyle.textContainer}>
            <Text style={landmarkInfoStyle.title}>
              {landmarkData.landmarkName}
            </Text>
            <Text style={landmarkInfoStyle.address}>
              {landmarkData.landmarkAddress}
            </Text>
            <Text style={landmarkInfoStyle.info}>{landmarkData.landInfo}</Text>
          </View>

          <View>
            <Image
              style={landmarkInfoStyle.FrameImage}
              source={{ uri: landmarkData.frameUrl }}
            />
          </View>
        </View>
      )}
    </RBSheet>
  );
};

const landmarkInfoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    ...Family.KR_Medium,
    ...Title.Medium,
    color: GRAY['900'],
    marginBottom: 8,
  },
  address: {
    ...Family.KR_Regular,
    ...Body.Small,
    color: GRAY['500'],
    marginBottom: 24,
  },
  info: {
    ...Family.KR_Regular,
    ...Body.Small,
    color: GRAY['700'],
  },
  FrameImage: {
    width: 128,
    height: 192,
    marginLeft: 16,
  },
});

export default LandmarkBottomSheet;
