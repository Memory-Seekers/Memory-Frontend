import { StyleSheet, Text, View, Image } from 'react-native';
import validator from 'validator';
import Constants from 'expo-constants';
import InputBox from '../../components/InputBox';
import FullButton from '../../components/buttons/FullButton';
import { useRef, useState } from 'react';
import { screenHorizontal } from '../../styles/globalStyles';
import { postSignIn } from '../../api/auth/signIn';
import { Body, Family, Label } from '../../styles/fonts';
import { DANGER, GRAY } from '../../styles/colors';
import { getAccessToken, storeAccessToken } from '../../api/token';

const SignInScreen = ({ navigation }) => {
  const [loginErrorMesseage, setLoginErrorMesseage] = useState('');

  const initialFormData = {
    email: '',
    password: '',
  };

  const [inputFormData, setInputFormData] = useState(initialFormData);
  const [inputFormErrors, setInputFormErrors] = useState(initialFormData);
  const inputFieldRef = useRef({
    email: null,
    password: null,
  });

  const focusNextField = (field) => {
    if (inputFieldRef.current[field]) {
      inputFieldRef.current[field].focus();
    }
  };

  const handleInputChange = (name, value) => {
    setInputFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = () => {
    const errors = {};

    setLoginErrorMesseage('');

    Object.values(inputFieldRef.current).forEach((ref) => {
      if (ref) {
        ref.blur();
      }
    });

    if (!inputFormData.email) {
      errors.email = '이메일을 입력해주세요.';
      focusNextField('email');
    } else if (!validator.isEmail(inputFormData.email)) {
      errors.email = '올바른 이메일 주소를 입력해주세요.';
    }

    if (!inputFormData.password) {
      errors.password = '비밀번호를 입력해주세요.';
    }

    setInputFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      postSignIn(inputFormData.email, inputFormData.password)
        .then(async (response) => {
          await storeAccessToken(response.accessToken);
        })
        .catch((error) => {
          setInputFormData(initialFormData);

          setLoginErrorMesseage(
            `이메일 또는 비밀번호가 맞지 않아요.
            다시 입력해주세요.`
          );
        });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/icon.png')}
          />

          <Text style={styles.loginErrorMesseage}>{loginErrorMesseage}</Text>

          <View style={styles.inputContainer}>
            <InputBox
              ref={(ref) => (inputFieldRef.current.email = ref)}
              title={''}
              placeholder={'이메일'}
              supportingText={''}
              errorMessage={inputFormErrors.email}
              onChangeText={(text) => handleInputChange('email', text)}
              onSubmitEditing={() => focusNextField('password')}
              value={inputFormData.email}
            />
            <InputBox
              ref={(ref) => (inputFieldRef.current.password = ref)}
              title={''}
              placeholder={'비밀번호'}
              supportingText={''}
              errorMessage={inputFormErrors.password}
              onChangeText={(text) => handleInputChange('password', text)}
              value={inputFormData.password}
              marginTop={16}
              secureTextEntry
            />
          </View>

          <View style={{ width: '100%' }}>
            <FullButton title={'로그인'} onPress={handleSignIn} />
          </View>

          <Text
            style={styles.smallText}
            onPress={() => navigation.navigate('SignUp')}
          >
            {'회원가입'}
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text
            style={[styles.smallText, { ...Family.KR_Regular, marginRight: 8 }]}
          >
            {'비밀번호를 잊으셨나요?'}
          </Text>
          <Text style={styles.smallText}>{'비밀번호 찾기'}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: screenHorizontal,
    paddingTop: Constants.statusBarHeight,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 48,
  },
  logo: {
    width: 128,
    height: 128,
    borderRadius: 24,
  },
  inputContainer: {
    width: '100%',
    marginTop: 16,
  },
  loginErrorMesseage: {
    ...Family.KR_Medium,
    ...Label.Medium,
    color: DANGER.DEFAULT,
    marginTop: 16,
    height: 32,
  },
  smallText: {
    ...Family.KR_Medium,
    ...Body.Small,
    color: GRAY['600'],
    marginTop: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 16,
  },
});

export default SignInScreen;
