import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const useLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const navigation = useNavigation();

  const submit = () => {
    const nextErrors = {};
    if (email.length === 0) {
      nextErrors.email = 'This field is required.';
    }
    if (password.length === 0) {
      nextErrors.password = 'This field is required.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length < 1) {
      navigation.navigate('Home');
    }
  };

  return {
    submit,
    errors,
    email,
    setEmail,
    password,
    setPassword,
  };
};
