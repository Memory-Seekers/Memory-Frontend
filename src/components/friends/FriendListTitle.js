import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { GRAY } from '../../styles/colors';
import { Family, Label } from '../../styles/fonts';

const FriendListTitle = ({ title, name, isExpand, setIsExpand }) => {
  const dropUpImage = require('../../../assets/Icons/Icon_Drop_Up.png');
  const dropDownImage = require('../../../assets/Icons/Icon_Drop_Down.png');

  return (
    <Pressable
      onPress={() =>
        setIsExpand((prev) => ({
          ...prev,
          [name]: !isExpand[name],
        }))
      }
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Image
          style={{ width: 24, height: 24 }}
          source={isExpand[name] ? dropDownImage : dropUpImage}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: GRAY['200'],
    marginTop: 8,
  },
  titleText: {
    ...Family.KR_Medium,
    ...Label.Small,
    color: GRAY['800'],
  },
});

export default FriendListTitle;
