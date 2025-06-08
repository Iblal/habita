import { StyleSheet, Text, View, TextInput } from 'react-native';
import FormSubmitBtn from '~/components/FormSubmitBtn';

const OTP = () => {
  return (
    <View className="mt-20 flex-1 px-5">
      <View className="mb-8">
        <Text className="font-nunito-semi-bold text-[#666666] text-lg text-center">
          Enter the 5-digit OTP we've sent to your email
        </Text>
      </View>
      <View className="flex-row justify-between mx-auto w-full max-w-sm">
        <TextInput
          className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold bg-white"
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold bg-white"
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold bg-white"
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold bg-white"
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold bg-white"
          keyboardType="number-pad"
          maxLength={1}
        />
      </View>
      <View className='mt-10'>
        <FormSubmitBtn label="Submit" />
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({});