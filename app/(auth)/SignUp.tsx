import { Text, View } from 'react-native';
import { useState } from 'react';
import InputField from '../../components/InputField';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import GoogleAuthBtn from '~/components/GoogleAuthBtn';
import SignUpHeader from '~/components/SignUpHeader';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleRegistration() {
    console.log('Sign Up Pressed');
    console.log("The values:", name, email, password, passwordConfirmation)
  }

  return (
    <View className="flex-1 bg-[#f6f6f6b1] pt-10">
      <SignUpHeader />
      <InputField label="Name" value={name} onChangeText={text => setName(text)} />
      <InputField label="Email" value={email} onChangeText={text => setEmail(text)} />
      <InputField label="Password" value={password} onChangeText={text => setPassword(text)}/>
      <InputField label="Password confirmation" value={passwordConfirmation} onChangeText={text => setPasswordConfirmation(text)}/>
      <View className="mt-5">
        <FormSubmitBtn
          label="Sign Up"
          onPress={() => {
            handleRegistration();
          }}
        />
      </View>
      <View className="my-8 items-center">
        <Text className="text-gray-500">Or sign up with:</Text>
      </View>
      <GoogleAuthBtn />
    </View>
  );
};

export default SignUp;
