import { Text, View } from 'react-native';

const Home = () => {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = today.toLocaleDateString('en-GB', options);

  return (
    <View className="ml-5">
      <Text className="mb-5 mt-5 font-nunito-bold">{formattedDate}</Text>
      <View className="flex-row">
        <Text className="font-nunito-semi-bold text-3xl">Hello, </Text>
        <Text className="font-nunito-semi-bold text-3xl text-primary-orange">Iblal!</Text>
      </View>
      <View className="flex-row justify-evenly items-center bg-orange-400 rounded-md mr-5 mt-5 p-10">
        <Text className="font-nunito-bold text-xl text-white">70%</Text>
        <View>
          <Text className="font-nunito-bold text-xl text-white">3 of 5 habits</Text>
          <Text className="font-nunito-medium text-xl text-white">completed today!</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
