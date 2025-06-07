import { StyleSheet, Text, View } from 'react-native';
import InputField from '~/components/InputField';
import LoginHeader from '~/components/LoginHeader';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import GoogleAuthBtn from '~/components/GoogleAuthBtn';
import { useState } from 'react';
import RememberMeAndForgot from '~/components/RememberMeAndForget';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function handleLogin() {
    console.log('Sign Up Pressed');
    console.log('The values:', email, password);
  }

  return (
    <View className="flex-1 bg-[#f6f6f6b1] pt-10">
      <LoginHeader />
      <InputField label="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <InputField
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
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

const styles = StyleSheet.create({});
