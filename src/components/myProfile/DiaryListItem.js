// `내 프로필` 탭 추억일지 리스트 아이템 컴포넌트

import { memo, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { GRAY, PRIMARY } from '../../styles/colors';
import { Body, Family, Label } from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { screenHorizontal } from '../../styles/globalStyles';
import { getTaggedFreindsMemories } from '../../api/myProfile/memories';
import FriendTagButton from './FriendTagButton';

const DiaryListItem = memo(({ item }) => {
  const navigation = useNavigation();
  const [memoryId, setMemoryId] = useState(null);
  const [friendTags, setFriendTags] = useState([]);

  handleMemoriesView = () => {
    setMemoryId(item.memoryId);
  };

  useEffect(() => {
    getTaggedFreindsMemories(item.memoryId)
      .then((response) => setFriendTags(response))
      .catch((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   memoryId && navigation.navigate('MemoriesViewScreen', { memoryId });
  //   setMemoryId(null);
  // }, [memoryId]);

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: screenHorizontal }}>
        <Text style={styles.dateText}>{item.createAt}</Text>
      </View>

      <Pressable onPress={handleMemoriesView}>
        <View
          style={[
            styles.imageContainer,
            !item.memoryPhoto && styles.imageTextContainer,
          ]}
        >
          {item.memoryPhoto ? (
            <Image style={styles.image} source={{ uri: item.memoryPhoto }} />
          ) : (
            <Text style={styles.imageText}>
              {'업로드된 사진이 존재하지 않습니다'}
            </Text>
          )}
          <View style={styles.friendTagContainer}>
            <FriendTagButton tagFriend={friendTags} />
          </View>
        </View>
      </Pressable>

      <View style={[styles.margeHorizontal, styles.hashTagContainer]}>
        {item.info.map((tagitems, index) => {
          const tagitem = Object.entries(tagitems)
            .map(([_, value]) => value)
            .join(', ');

          return (
            <View key={index} style={styles.hashTagBox}>
              <Text style={{ color: PRIMARY.DEFAULT }}>#{tagitem} </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  dateText: {
    ...Family.KR_Regular,
    ...Body.Medium,
  },
  imageContainer: {
    height: 176,
    marginVertical: 8,
    borderTopWidth: 1,
    borderColor: GRAY['200'],
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
  },
  imageTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY['100'],
  },
  imageText: {
    ...Family.KR_Medium,
    ...Label.Medium,
    color: GRAY['500'],
  },
  margeHorizontal: {
    marginHorizontal: 16,
  },
  friendTagContainer: {
    position: 'absolute',
    right: 16,
    bottom: 8,
  },
  hashTagContainer: {
    flexDirection: 'row',
    columnGap: 8,
    rowGap: 4,
    flexWrap: 'wrap',
  },
});

export default DiaryListItem;
