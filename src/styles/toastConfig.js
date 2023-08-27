import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { DANGER, GRAY, WHITE } from './colors';
import { Family, Label } from './fonts';
import { StyleSheet } from 'react-native';

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={[styles.toastContainer, { backgroundColor: GRAY['800'] }]}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      text1Style={{
        ...Family.KR_Medium,
        ...Label.Large,
        color: WHITE,
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={[styles.toastContainer, { backgroundColor: DANGER.DEFAULT }]}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      text1Style={{
        ...Family.KR_Medium,
        ...Label.Large,
        color: WHITE,
      }}
    />
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    height: 48,
    borderLeftWidth: 0,
    borderRadius: 4,
  },
});

export default toastConfig;
