import { Text, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import RememberMeAndForgot from '~/components/auth/RememberMeAndForget';
import InputField from '~/components/InputField';
import LoginHeader from '~/components/auth/LoginHeader';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import GoogleAuthBtn from '~/components/auth/GoogleAuthBtn';
import FormErrorLabel from '~/components/FormErrorLabel';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;

    setEmailError('');
    setPasswordError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      isValid = false;
    }

    return isValid;
  };

  function handleLogin() {
    // if (validateForm()) {
    //   console.log('Login attempt with:', email, password);
    //   Alert.alert('Success', 'Login credentials valid! (Implement actual login logic)');
    // } else {
    //   console.log('Login validation failed.');
    //   Alert.alert('Error', 'Please enter your email and password.');
    // }
    router.navigate('/(tabs)/Home');
  }

  return (
    <View className="flex-1 bg-[#f6f6f6b1] pt-10">
      <LoginHeader />
      <FormErrorLabel label={emailError} />
      <InputField
        label="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (emailError && text.trim()) {
            setEmailError('');
          }
        }}
        inputClassName="mx-5 mt-2"
      />

      <FormErrorLabel label={passwordError} />
      <InputField
        label="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (passwordError && text.trim()) {
            setPasswordError('');
          }
        }}
        secureTextEntry={true}
        inputClassName="mx-5 mt-2"
      />

      <View className="mt-5">
        <FormSubmitBtn label="Log In" onPress={handleLogin} />
      </View>

      <View className="mt-5">
        <RememberMeAndForgot rememberMe={rememberMe} setRememberMe={setRememberMe} />
      </View>

      <View className="my-8 items-center">
        <Text className="text-gray-500">Or sign in with:</Text>
      </View>
      <GoogleAuthBtn />
    </View>
  );
};

export default LogIn;
