import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import InputField from '~/components/InputField';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  function handleSendEmail() {
    console.log('OTP has been sent to : ', email);
    router.navigate('/(auth)/OTPConfirmation');
  }

  return (
    <View className="mt-20">
      <View className="ml-6">
        <Text className="font-nunito-semi-bold text-[#666666]">
          Enter your email below, we will send instructions to reset your password
        </Text>
      </View>
      <InputField value={email} onChangeText={setEmail} inputClassName="mx-5 mt-2 mb-5" />
      <FormSubmitBtn label="Send email" onPress={handleSendEmail} />
    </View>
  );
};

export default PasswordRecovery;

const styles = StyleSheet.create({});
