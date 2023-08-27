import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { GRAY } from '../../styles/colors';
import { useState } from 'react';

const FriendSearchBox = ({ placeholder, value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 24, height: 24, tintColor: GRAY['500'] }}
        source={require('../../../assets/Icons/Icon_Search.png')}
      />
      <TextInput
        style={styles.inputContainer}
        {...props}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={GRAY.DEFAULT}
        selectionColor={isFocused && GRAY.DEFAULT}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: GRAY['50'],
    alignItems: 'center',
    borderRadius: 8,
  },
  inputContainer: {
    height: 48,
    marginLeft: 8,
  },
});

export default FriendSearchBox;
