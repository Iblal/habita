import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import InputField from '~/components/InputField';

const ForgotPasswordEmail = () => {
  const [email, setEmail] = useState('');

  function handleSendEmail() {
    console.log("OTP has been sent to : ", email)
  }

  return (
    <View className="mt-20">
      <View className="ml-6">
        <Text className="font-nunito-semi-bold text-[#666666]">
          Enter your email below, we will send instructions to reset your password
        </Text>
      </View>
      <InputField value={email} onChangeText={setEmail} />
      <FormSubmitBtn label="Send email" onPress={handleSendEmail} />
    </View>
  );
};

export default ForgotPasswordEmail;

const styles = StyleSheet.create({});
