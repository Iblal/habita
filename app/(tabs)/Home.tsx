import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

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
      <View className="mr-5 mt-5 flex-row items-center justify-evenly rounded-md bg-orange-400 p-10">
        <Text className="font-nunito-bold text-xl text-white">70%</Text>
        <View>
          <Text className="font-nunito-bold text-xl text-white">3 of 5 habits</Text>
          <Text className="font-nunito-medium text-xl text-white">completed today!</Text>
        </View>
      </View>
      <View className="mr-5 mt-5 rounded bg-white p-5">
        <View className="flex-row justify-between">
          <Text className="font-nunito-bold text-xl">Today's habits</Text>
          <Link href="/">
            <Text className="font-nunito-bold text-primary-orange">See all</Text>
          </Link>
        </View>
        <View className="flex-row items-center justify justify-between bg-[#EDFFF4] mt-5 p-5 rounded">
          <Text className='text-[#37C871] font-nunito-bold'>Meditating</Text>
          <View className='flex-row items-center'>
            <Checkbox></Checkbox>
            <Entypo name="dots-three-vertical" size={16} color="grey" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
