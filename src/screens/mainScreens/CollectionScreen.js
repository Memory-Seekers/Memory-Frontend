import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GRAY, PRIMARY, WHITE } from '../../styles/colors';
import { Family, Label } from '../../styles/fonts';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getMyFourCut, getTaggedFourCut } from '../../api/collections/fourCut';
import FourCutList from '../../components/collections/FourCutList';
import { getMyAccount } from '../../api/friends/friendList';

const TopBarBox = ({ title, enabled, onPress }) => {
  return (
    <Pressable style={styles.selectContainer} onPress={onPress}>
      <View
        style={[
          styles.textContainer,
          enabled && { borderColor: PRIMARY.DEFAULT },
        ]}
      >
        <Text
          style={[styles.selectedText, enabled && { color: PRIMARY.DEFAULT }]}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const CollectionScreen = ({ navigation }) => {
  const [isLeftEnabled, setIsLeftEnabled] = useState(true);

  const [myFourCut, setMyFourCut] = useState([]);
  const [taggedFourCut, setTaggedFourCut] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getMyFourCut()
        .then((response) => setMyFourCut(response))
        .catch((error) => console.error(error));
      getMyAccount()
        .then((response) => {
          getTaggedFourCut(response.tagId)
            .then((response) => setTaggedFourCut(response))
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    }, [isLeftEnabled])
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderBottomWidth: 1,
            borderColor: GRAY['200'],
          }}
        ></View>
        <TopBarBox
          title={'나의 추억네컷'}
          onPress={() => setIsLeftEnabled(true)}
          enabled={isLeftEnabled}
        />
        <TopBarBox
          title={'공유된 추억네컷'}
          onPress={() => setIsLeftEnabled(false)}
          enabled={!isLeftEnabled}
        />
      </View>

      <View style={styles.fourCutContainer}>
        {isLeftEnabled ? (
          <FourCutList data={myFourCut} />
        ) : (
          <FourCutList data={taggedFourCut} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  topBarContainer: {
    position: 'relative',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: '100%',
    justifyContent: 'center',
    borderColor: '#ffffff00',
    borderBottomWidth: 2,
  },
  selectedText: {
    ...Family.KR_Medium,
    ...Label.Large,
    color: GRAY['500'],
  },
  fourCutContainer: {
    marginTop: 8,
  },
});

export default CollectionScreen;
