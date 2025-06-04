import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#F6F6F6]">
      <View className="flex-row justify-between">
        <Text>Sign Up</Text>
        <Pressable>
          <Text>Log in</Text>
        </Pressable>
      </View>
      <Text>Name</Text>
      <TextInput></TextInput>
      <Text>Email</Text>
      <TextInput></TextInput>
      <Text>Password</Text>
      <TextInput></TextInput>
      <Text>Password Confirmation</Text>
      <TextInput></TextInput>
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
      <Text>Or sign up with:</Text>
      <Pressable>
        <Text>Google</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
