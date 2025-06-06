import { StyleSheet, Text, Pressable } from 'react-native';

const GoogleAuthBtn = () => {
  return (
    <Pressable className="mx-5 flex-row items-center justify-center rounded-lg border border-gray-300 bg-white p-3">
      <Text className="mr-2 text-xl font-bold">G</Text>
      <Text className="font-semibold text-gray-700">Google</Text>
    </Pressable>
  );
};

export default GoogleAuthBtn;

const styles = StyleSheet.create({});
