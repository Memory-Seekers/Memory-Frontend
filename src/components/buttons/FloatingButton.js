import { Pressable, Text, StyleSheet, Image, View } from 'react-native';

import { WHITE } from '../../styles/colors';

const FloatingButton = ({ style, icon, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, style]}>
      <Image source={icon} style={styles.ButtonIconStyle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 48,
    height: 48,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginTop: 16,
    elevation: 2,
  },
  ButtonIconStyle: {
    resizeMode: 'contain',
    height: 24,
  },
});

export default FloatingButton;
