import {
  Pressable,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRef } from 'react';

import { DANGER, GRAY } from '../../styles/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import Toast from 'react-native-toast-message';
import { Family, Label } from '../../styles/fonts';
import { screenHorizontal } from '../../styles/globalStyles';
import { storeAccessToken, storeRefreshToken } from '../../api/token';
import { useAuth } from '../../contexts/AuthContext';

const LogoutHeaderButton = () => {
  const { setIsLoggedIn } = useAuth(); // 현재 로그인 정보 받아오는 상태변수
  const refRBSheet = useRef(); // bottom sheet의 ref 상태 변수

  const handleLogout = () => {
    setIsLoggedIn(false);
    storeAccessToken('');
    storeRefreshToken('');
    Toast.show({
      type: 'success',
      text1: '성공적으로 로그아웃이 되었습니다.',
      position: 'bottom',
    });
  };

  return (
    <>
      <Pressable hitSlop={8} onPress={() => refRBSheet.current.open()}>
        <Image
          source={require('../../../assets/Icons/Icon_More.png')}
          style={styles.image}
        ></Image>
      </Pressable>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={92}
        animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: '#00000045',
          },
          draggableIcon: {
            backgroundColor: GRAY[300],
          },
          container: {
            width: '100%',
            paddingHorizontal: screenHorizontal,
            borderTopStartRadius: 28,
            borderTopEndRadius: 28,
          },
        }}
      >
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.bottomSheetList}>
            <Image
              source={require('../../../assets/Icons/Icon_Logout.png')}
              style={[styles.image, { marginRight: 8 }]}
            ></Image>
            <Text style={styles.text}>로그아웃</Text>
          </View>
        </TouchableOpacity>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetList: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    ...Family.KR_Medium,
    ...Label.Large,
    color: DANGER.DEFAULT,
  },
});

export default LogoutHeaderButton;
