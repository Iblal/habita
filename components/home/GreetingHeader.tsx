import { Text, View } from 'react-native';

const GreetingHeader = () => {
  return (
    <View className="flex-row">
      <Text className="font-nunito-semi-bold text-3xl">Hello, </Text>
      <Text className="font-nunito-semi-bold text-3xl text-primary-orange">Iblal!</Text>
    </View>
  );
};

export default GreetingHeader;