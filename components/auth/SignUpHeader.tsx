import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const SignUpHeader = () => {

  return (
    <View className="mb-10 flex-row items-baseline justify-center gap-10">
      <Text className="font-nunito-bold text-[40px]">Sign Up</Text>
      <Link href="/(auth)/LogIn" push>
        <Text className="font-nunito-extra-bold text-[14px] text-primary-orange">Log in {'>'}</Text>
      </Link>
    </View>
  );
};

export default SignUpHeader;

const styles = StyleSheet.create({});
