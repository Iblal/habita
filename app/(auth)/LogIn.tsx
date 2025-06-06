import { StyleSheet, Text, View } from 'react-native';
import InputField from '~/components/InputField';
import LoginHeader from '~/components/LoginHeader';
import { Checkbox } from 'expo-checkbox';
import { Link } from 'expo-router';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import GoogleAuthBtn from '~/components/GoogleAuthBtn';

const LogIn = () => {
  return (
    <View className="flex-1 bg-[#f6f6f6b1] pt-10">
      <LoginHeader />
      <InputField label="Email" />
      <InputField label="Password" />
      <View className="mt-4 flex-row items-center justify-between px-6">
        <View className="flex-row">
          <Checkbox></Checkbox>
          <Text className="ml-2 text-base text-[#666666]">Remember me</Text>
        </View>
        <Link href="/">
          <Text className="font-nunito-semi-bold text-[#FF5C00]">Forgot password?</Text>
        </Link>
      </View>
      <View className='mt-12'>
        <FormSubmitBtn label="Log In" onPress={() => console.log('Log In Pressed')} />
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
