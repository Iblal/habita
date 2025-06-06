import { Text, View } from 'react-native';
import InputField from '../../components/InputField';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import GoogleAuthBtn from '~/components/GoogleAuthBtn';
import SignUpHeader from '~/components/SignUpHeader';

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#f6f6f6b1] pt-10">
      <SignUpHeader />
      <InputField label="Name" />
      <InputField label="Email" />
      <InputField label="Password" />
      <InputField label="Password confirmation" />
      <View className="mt-5">
        <FormSubmitBtn label="Sign Up" onPress={() => console.log('Sign Up Pressed')} />
      </View>
      <View className="my-8 items-center">
        <Text className="text-gray-500">Or sign up with:</Text>
      </View>
      <GoogleAuthBtn />
    </View>
  );
};

export default SignUp;
