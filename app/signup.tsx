import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#F6F6F6]">
      <View className="flex-row mt-10 items-center justify-center">
        <Text className="font-nunito-bold mr-10 h-[55px] w-[167px] text-[40px] leading-[55px]">
          Sign Up
        </Text>
        <View className="mt-4">
          <Link href="/">
            <Text className="font-nunito-extra-bold text-[#FF5C00] h-[19px] w-[59px] text-[14px]  leading-[19px]">Log in {'>'}</Text>
          </Link>
        </View>
      </View>
      <Text>Name</Text>
      <TextInput></TextInput>
      <Text>Email</Text>
      <TextInput></TextInput>
      <Text>Password</Text>
      <TextInput></TextInput>
      <Text>Password Confirmation</Text>
      <TextInput></TextInput>
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
      <Text>Or sign up with:</Text>
      <Pressable>
        <Text>Google</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
