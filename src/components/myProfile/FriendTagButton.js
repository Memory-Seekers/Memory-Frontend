import {
  Image,
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { GRAY } from '../../styles/colors';
import { Family, Label, Title } from '../../styles/fonts';
import { screenHorizontal } from '../../styles/globalStyles';

const FriendTagButton = ({ tagFriend, style }) => {
  const refRBSheet = useRef(); // bottom sheet의 ref 상태 변수

  return (
    <>
      <Pressable
        style={style}
        onPress={() => {
          refRBSheet.current.open();
        }}
      >
        <Image
          source={require('../../../assets/Icons/Icon_Person.png')}
          style={styles.image}
        ></Image>
      </Pressable>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
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
        <View>
          <View>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
              <Text style={styles.title}>태그된 친구목록</Text>
              {tagFriend?.map((item, index) => {
                return (
                  <View style={{ width: '100%' }} key={index}>
                    <View style={styles.textContainer}>
                      <Text style={styles.nickNameText}>{item.nickName}</Text>
                      <Text style={styles.tagIdText}>#{item.tagId}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 24,
    width: 24,
  },
  title: {
    ...Family.KR_Medium,
    ...Title.Medium,
    marginVertical: 16,
  },
  nickNameText: {
    ...Family.KR_Medium,
    ...Label.Large,
  },
  tagIdText: {
    ...Family.KR_Medium,
    ...Label.Small,
    color: GRAY[400],
  },
});
export default FriendTagButton;
