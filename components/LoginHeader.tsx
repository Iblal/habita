import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const LoginHeader = () => {
  return (
    <View className="mb-10 flex-row items-baseline justify-center gap-10">
      <Text className="font-nunito-bold text-[40px]">Log in</Text>
      <Link href="/(auth)/SignUp" push>
        <Text className="font-nunito-extra-bold text-[14px] text-[#FF5C00]">Sign Up {'>'}</Text>
      </Link>
    </View>
  )
}

export default LoginHeader

const styles = StyleSheet.create({})