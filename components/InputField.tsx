import { StyleSheet, Text, View, TextInput} from 'react-native';

const labelStyle = "px-5 font-nunito-semi-bold text-base text-[#666666]";
const inputStyle = "mx-5 mt-2 h-14 rounded-md border border-[#EDEDED] bg-white p-4";
const formGroupStyle = "mb-4";

interface InputFieldProps {
    label: string;
}

const InputField = ({label}: InputFieldProps) => {
  return (
    <View className={formGroupStyle}>
      <Text className={labelStyle}>{label}</Text>
      <TextInput
        className={inputStyle}
        placeholderTextColor="#999"
        autoCapitalize="words"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
