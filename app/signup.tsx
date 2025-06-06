import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#f6f6f6b1]">
      <View className="mt-10 flex-row items-center justify-center">
        <Text className="mr-10 h-[55px] w-[167px] font-nunito-bold text-[40px] leading-[55px]">
          Sign Up
        </Text>
        <View className="mt-4">
          <Link href="/">
            <Text className="h-[19px] w-[59px] font-nunito-extra-bold text-[14px] leading-[19px]  text-[#FF5C00]">
              Log in {'>'}
            </Text>
          </Link>
        </View>
      </View>
      <View className="mt-10">
        <Text className="ml-5 font-nunito-semi-bold text-[#666666]">Name</Text>
        <TextInput className="m-5 mt-3 rounded-md border border-[#EDEDED] bg-white"></TextInput>
      </View>
      <Text className="ml-5 font-nunito-semi-bold text-[#666666]">Email</Text>
      <TextInput className="m-5 mt-3 rounded-md border border-[#EDEDED] bg-white"></TextInput>
      <Text className="ml-5 font-nunito-semi-bold text-[#666666]">Password</Text>
      <TextInput className="m-5 mt-3 rounded-md border border-[#EDEDED] bg-white"></TextInput>
      <Text className="ml-5 font-nunito-semi-bold text-[#666666]">Password Confirmation</Text>
      <TextInput className="m-5 mt-3 rounded-md border border-[#EDEDED] bg-white"></TextInput>
      <Pressable className="m-5 overflow-hidden rounded-md">
        <LinearGradient
          className="px-6 py-5"
          colors={['#e6a05c', '#ff7a18', '#ff5e00']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Text className="text-center font-nunito-extra-bold text-white">Sign Up</Text>
        </LinearGradient>
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
