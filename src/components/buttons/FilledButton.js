import { Pressable, StyleSheet, Text } from 'react-native';
import { GRAY, PRIMARY, WHITE } from '../../styles/colors';
import { Family, Label } from '../../styles/fonts';
import { useEffect, useState } from 'react';

const FilledButton = ({ title, onPress, disabled, disabledTitle }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(disabled);
  }, []);

  return (
    <Pressable
      style={[
        styles.container,
        isDisabled && { backgroundColor: GRAY.DEFAULT },
      ]}
      onPress={() => {
        onPress();
        setIsDisabled(true);
      }}
      disabled={isDisabled}
    >
      <Text style={[styles.title]}>{isDisabled ? disabledTitle : title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: PRIMARY.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    ...Family.KR_Regular,
    ...Label.Medium,
    color: WHITE,
  },
});

export default FilledButton;
