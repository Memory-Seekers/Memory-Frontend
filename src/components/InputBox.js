import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Family, Label } from '../styles/fonts';
import { forwardRef, useState } from 'react';
import { DANGER, GRAY, PRIMARY } from '../styles/colors';

const InputBox = forwardRef(
  (
    {
      title,
      placeholder,
      supportingText,
      value,
      errorMessage,
      marginTop,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={[styles.container, { marginTop: marginTop }]}>
        {title && <Text style={styles.title}>{title}</Text>}

        <View>
          <TextInput
            style={[
              styles.inputContainer,
              isFocused && styles.focusedInput,
              errorMessage && styles.errorInput,
            ]}
            {...props}
            ref={ref}
            value={value}
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            selectionColor={isFocused && GRAY.DEFAULT}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>

        <Text
          style={[
            styles.supportingText,
            errorMessage && { color: DANGER.DEFAULT },
          ]}
        >
          {errorMessage ? errorMessage : supportingText}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    ...Family.KR_Medium,
    ...Label.Large,
    color: GRAY['700'],
  },
  inputContainer: {
    height: 40,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderColor: GRAY[300],
  },
  focusedInput: {
    borderColor: PRIMARY.DEFAULT,
  },
  errorInput: {
    borderColor: DANGER.DEFAULT,
  },
  supportingText: {
    ...Family.KR_Medium,
    ...Label.Medium,
    color: GRAY.DEFAULT,
    marginTop: 8,
  },
});

export default InputBox;
