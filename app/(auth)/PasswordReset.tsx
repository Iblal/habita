import { StyleSheet, Text, View } from 'react-native';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import InputField from '~/components/InputField';

const PasswordReset = () => {
  return (
    <View className="mt-20 flex-1">
      <View className="ml-5">
        <Text className="font-nunito-semi-bold text-lg text-[#666666]">
          Enter new password:
        </Text>
      </View>
      <View className="mt-5">
        <InputField label="Password"></InputField>
        <InputField label="Confirm new password"></InputField>
      </View>
      <View className='mt-5'>
        <FormSubmitBtn label="Submit"></FormSubmitBtn>
      </View>
    </View>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({});
