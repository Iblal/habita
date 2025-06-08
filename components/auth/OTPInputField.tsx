import { StyleSheet, TextInput} from 'react-native';

const OTPInputField = () => {
  return (
    <TextInput
      className="h-12 w-12 rounded-md border border-gray-300 bg-white text-center text-xl font-bold"
      keyboardType="number-pad"
      maxLength={1}
    />
  );
};

export default OTPInputField;

const styles = StyleSheet.create({});
