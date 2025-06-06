import { Pressable, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const labelStyle = "px-5 font-nunito-semi-bold text-base text-[#666666]";
const inputStyle = "mx-5 mt-2 h-14 rounded-md border border-[#EDEDED] bg-white p-4";
const formGroupStyle = "mb-4";

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#f6f6f6b1] pt-10">
      <View className="mb-10 flex-row items-baseline justify-center gap-10">
        <Text className="font-nunito-bold text-[40px]">Sign Up</Text>
        <Link href="/">
          <Text className="font-nunito-extra-bold text-[14px] text-[#FF5C00]">
            Log in {'>'}
          </Text>
        </Link>
      </View>

      <View className={formGroupStyle}>
        <Text className={labelStyle}>Name</Text>
        <TextInput
          className={inputStyle}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          autoCapitalize="words"
        />
      </View>

      <View className={formGroupStyle}>
        <Text className={labelStyle}>Email</Text>
        <TextInput
          className={inputStyle}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className={formGroupStyle}>
        <Text className={labelStyle}>Password</Text>
        <TextInput
          className={inputStyle}
          placeholder="Create a password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
      </View>

      <View className={formGroupStyle}>
        <Text className={labelStyle}>Password Confirmation</Text>
        <TextInput
          className={inputStyle}
          placeholder="Confirm your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
      </View>

      <Pressable className="mx-5 mt-4 overflow-hidden rounded-lg">
        <LinearGradient
          className="items-center justify-center px-6 py-4"
          colors={['#fb923c', '#f97316']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text className="text-center text-lg font-bold text-white">Sign Up</Text>
        </LinearGradient>
      </Pressable>

      <View className="my-8 items-center">
        <Text className="text-gray-500">Or sign up with:</Text>
      </View>

      <Pressable className="mx-5 flex-row items-center justify-center rounded-lg border border-gray-300 bg-white p-3">
        <Text className="mr-2 font-bold text-xl">G</Text>
        <Text className="font-semibold text-gray-700">Google</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;