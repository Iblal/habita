import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { Link } from 'expo-router';

interface RememberMeAndForgotProps {
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void; 
}

const RememberMeAndForgot = ({rememberMe, setRememberMe} : RememberMeAndForgotProps) => {
  return (
    <View className="mt-4 flex-row items-center justify-between px-6">
      <View className="flex-row">
        <Checkbox color={'#FF8C00'} value={rememberMe} onValueChange={setRememberMe}></Checkbox>
        <Text className="ml-2 text-base text-[#666666]">Remember me</Text>
      </View>
      <Link href="/">
        <Text className="font-nunito-semi-bold text-primary-orange">Forgot password?</Text>
      </Link>
    </View>
  );
};

export default RememberMeAndForgot;

const styles = StyleSheet.create({});
