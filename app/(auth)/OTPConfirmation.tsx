import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import OTPInputField from '~/components/auth/OTPInputField';

const OTP = () => {
  const router = useRouter();

  function handleOTPConfirmation() {
    console.log('OTP has been confirmed');
    router.navigate('/(auth)/PasswordReset');
  }

  return (
    <View className="mt-20 flex-1 px-5">
      <View className="mb-8">
        <Text className="text-center font-nunito-semi-bold text-lg text-[#666666]">
          Enter the 5-digit OTP we've sent to your email
        </Text>
      </View>
      <View className="mx-auto w-full max-w-sm flex-row justify-between">
        <OTPInputField  />
        <OTPInputField />
        <OTPInputField />
        <OTPInputField />
        <OTPInputField />
      </View>
      <View className="mt-10">
        <FormSubmitBtn label="Submit" onPress={handleOTPConfirmation} />
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({});
