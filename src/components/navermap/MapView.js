import React, { useRef, useState } from 'react';
import NaverMapView from 'react-native-nmap';
import LandmarkMarker from './LandmarkMarker';
import { useFocusEffect } from '@react-navigation/native';
import { getLandmarks } from '../../api/memories/landmark';
import LandmarkBottomSheet from './LandmarkBottomSheet';

const MapView = ({ children, isView = true }) => {
  const [landmarks, setLandmarks] = useState(null);
  const [selectedLandmark, setSelectedLandmark] = useState(null);

  const refRBSheet = useRef();

  useFocusEffect(
    React.useCallback(() => {
      getLandmarks()
        .then((response) => setLandmarks(response))
        .catch((error) => console.error(error));
    })
  );

  return (
    <>
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
        scaleBar={false}
        useTextureView={true}
      >
        {isView && (
          <LandmarkMarker
            landmarks={landmarks}
            onClick={() => refRBSheet.current.open()}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
          />
        )}
      </NaverMapView>

      <LandmarkBottomSheet
        landmarkId={selectedLandmark}
        refRBSheet={refRBSheet}
        setSelectedLandmark={setSelectedLandmark}
      />
    </>
  );
};

export default MapView;
