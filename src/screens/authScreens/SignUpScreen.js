import { StyleSheet, View, Text, Keyboard } from 'react-native';
import validator from 'validator';
import { screenHorizontal } from '../../styles/globalStyles';
import Constants from 'expo-constants';
import InputBox from '../../components/InputBox';
import { useEffect, useRef, useState } from 'react';
import FullButton from '../../components/buttons/FullButton';
import OutLineButton from '../../components/buttons/OutLineButton';
import {
  getIdConfirm,
  postEmailJoinConfirm,
  postSignUp,
} from '../../api/auth/signUp';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const SignUpScreen = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);
  const [serverAuthenticationCode, setServerAuthenticationCode] =
    useState(null);
  const [tagIdConfirm, setTagIdConfirm] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [codeConfim, setCodeConfirm] = useState(false);

  const initialFormData = {
    tagId: '',
    email: '',
    password: '',
    nickName: '',
    authenticationCode: '',
  };

  const [inputFormData, setInputFormData] = useState(initialFormData);
  const [inputFormErrors, setInputFormErrors] = useState(initialFormData);
  const inputFieldRef = useRef({
    tagId: null,
    email: null,
    password: null,
    nickName: null,
    authenticationCode: null,
  });

  useEffect(() => {
    setDisabled(
      !inputFormData.tagId ||
        !inputFormData.email ||
        !inputFormData.password ||
        !inputFormData.nickName
    );
  }, [inputFormData]);

  useEffect(() => {
    emailConfirm && focusNextField('authenticationCode');
  }, [emailConfirm]);

  const handleInputChange = (name, value) => {
    setInputFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const focusNextField = (field) => {
    if (inputFieldRef.current[field]) {
      inputFieldRef.current[field].focus();
    }
  };

  const handleEmailConfirm = async () => {
    const errors = {};

    if (!inputFormData.email) {
      errors.email = '이메일을 입력해주세요.';
      focusNextField('email');
    } else if (!validator.isEmail(inputFormData.email)) {
      errors.email = '올바른 이메일 주소를 입력해 주세요.';
    }

    if (Object.keys(errors).length === 0) {
      await postEmailJoinConfirm(inputFormData.email)
        .then((response) => {
          setServerAuthenticationCode(response);
          setEmailConfirm(true);
        })
        .catch((error) => {
          errors.email = '이메일 인증을 다시 시도해 주세요.';
        });
    }

    setInputFormErrors(errors);
  };

  const handleCodeConfirm = () => {
    const errors = {};

    if (!inputFormData.authenticationCode) {
      errors.authenticationCode = '인증코드를 입력해 주세요.';
      focusNextField('authenticationCode');
    }
    if (serverAuthenticationCode == inputFormData.authenticationCode) {
      setCodeConfirm(true);
    }

    setInputFormErrors(errors);
  };

  const handleSignUp = async () => {
    const errors = {};
    if (!emailConfirm) {
      errors.email = '이메일 인증을 진행해 주세요.';
    } else if (!codeConfim) {
      errors.authenticationCode = '이메일 인증을 진행해 주세요.';
    }

    await getIdConfirm(inputFormData.tagId).then((response) => {
      console.log(response);
      if (!response) {
        errors.tagId = '이미 가입된 아이디입니다.';
      }
    });

    if (Object.keys(errors).length === 0) {
      postSignUp(
        inputFormData.tagId,
        inputFormData.email,
        inputFormData.password,
        inputFormData.nickName
      )
        .then((response) => navigation.navigate('SignIn'))
        .catch((error) => {
          console.error(error);
          Toast.show({
            type: 'error',
            text1: '회원가입에 실패하였습니다.',
            position: 'bottom',
          });
        });
    }
    setInputFormErrors(errors);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <InputBox
            ref={(ref) => (inputFieldRef.current.tagId = ref)}
            title={'아이디'}
            placeholder={'아이디를 입력해주세요.'}
            supportingText={'상대방이 내 아이디를 검색할 수 있습니다.'}
            errorMessage={inputFormErrors.tagId}
            onChangeText={(text) => handleInputChange('tagId', text)}
            onSubmitEditing={() => focusNextField('email')}
            value={inputFormData.tagId}
          />
          <View style={styles.rowContainer}>
            <View style={{ flex: 1 }}>
              <InputBox
                ref={(ref) => (inputFieldRef.current.email = ref)}
                title={'이메일'}
                placeholder={'이메일을 입력해주세요.'}
                supportingText={''}
                errorMessage={inputFormErrors.email}
                onChangeText={(text) => handleInputChange('email', text)}
                value={inputFormData.email}
                marginTop={24}
              />
            </View>
            <View style={{ top: 12, marginLeft: 8 }}>
              <OutLineButton
                title={'이메일 인증'}
                disabled={emailConfirm}
                onPress={handleEmailConfirm}
              />
            </View>
          </View>
          {emailConfirm && !codeConfim && (
            <View style={styles.rowContainer}>
              <View style={{ flex: 1 }}>
                <InputBox
                  ref={(ref) =>
                    (inputFieldRef.current.authenticationCode = ref)
                  }
                  title={''}
                  placeholder={'인증코드를 입력해 주세요.'}
                  supportingText={''}
                  errorMessage={inputFormErrors.authenticationCode}
                  onChangeText={(text) =>
                    handleInputChange('authenticationCode', text)
                  }
                  value={inputFormData.authenticationCode}
                  marginTop={16}
                />
              </View>
              <View style={{ top: -2, marginLeft: 8 }}>
                <OutLineButton
                  title={'인증하기'}
                  disabled={false}
                  onPress={handleCodeConfirm}
                />
              </View>
            </View>
          )}

          <InputBox
            ref={(ref) => (inputFieldRef.current.password = ref)}
            title={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요.'}
            supportingText={''}
            errorMessage={inputFormErrors.password}
            onChangeText={(text) => handleInputChange('password', text)}
            onSubmitEditing={() => focusNextField('nickName')}
            value={inputFormData.password}
            marginTop={24}
            secureTextEntry
          />
          <InputBox
            ref={(ref) => (inputFieldRef.current.nickName = ref)}
            title={'닉네임'}
            placeholder={'닉네임을 입력해주세요.'}
            supportingText={''}
            errorMessage={inputFormErrors.nickName}
            onChangeText={(text) => handleInputChange('nickName', text)}
            value={inputFormData.nickName}
            marginTop={24}
          />
        </View>

        <View style={styles.bottomContainer}>
          <FullButton
            title={'회원가입'}
            disabled={disabled}
            onPress={handleSignUp}
          />
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
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  bottomContainer: {
    bottom: 36,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUpScreen;
