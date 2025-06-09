import { Text, View, TextInput, TextInputProps } from 'react-native';

const baseLabelStyle = "px-5 font-nunito-semi-bold text-base text-[#666666]";
const baseInputStyle = "h-14 rounded-md border border-[#EDEDED] bg-white p-4";

interface InputFieldProps extends TextInputProps {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const InputField = ({
  label,
  containerClassName = '',
  labelClassName = '',
  inputClassName = '',
  ...rest
}: InputFieldProps) => {
  return (
    <View className={containerClassName}>
      {label && (
        <Text className={`${baseLabelStyle} ${labelClassName}`}>
          {label}
        </Text>
      )}
      <TextInput
        className={`${baseInputStyle} ${inputClassName}`}
        placeholderTextColor="#999"
        autoCapitalize="words"
        {...rest}
      />
    </View>
  );
};

export default InputField;