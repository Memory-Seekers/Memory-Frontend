import { Pressable, StyleSheet, Text } from 'react-native';
import { GRAY, PRIMARY, WHITE } from '../../styles/colors';
import { Body, Family } from '../../styles/fonts';

const FullButton = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      style={[styles.container, disabled && { backgroundColor: GRAY.DEFAULT }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: PRIMARY.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 16,
  },
  title: {
    ...Family.KR_Medium,
    ...Body.Large,
    color: WHITE,
  },
});

export default FullButton;
