import { Pressable, StyleSheet, Text } from 'react-native';
import { GRAY, WHITE } from '../../styles/colors';
import { Body, Family } from '../../styles/fonts';

const OutLineButton = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      style={[styles.container, disabled && { borderColor: GRAY['200'] }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.title, disabled && { color: GRAY['300'] }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: GRAY['300'],
  },
  title: {
    ...Family.KR_Regular,
    ...Body.Medium,
    color: GRAY['500'],
  },
});

export default OutLineButton;
