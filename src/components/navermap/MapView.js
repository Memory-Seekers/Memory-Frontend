import NaverMapView from 'react-native-nmap';

const MapView = ({ children }) => {
  return (
    <>
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
        scaleBar={false}
        useTextureView={true}
      ></NaverMapView>
    </>
  );
};

export default MapView;
