import { Text, View, ScrollView } from 'react-native';
import TodaysHabitsSummary from '~/components/home/TodaysHabitsSummary';
import TodaysHabits from '~/components/home/TodaysHabits';
import YourGoals from '~/components/home/YourGoals';

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
    <ScrollView>
      <View className="ml-5">
        <Text className="mb-5 mt-5 font-nunito-bold">{formattedDate}</Text>
        <View className="flex-row">
          <Text className="font-nunito-semi-bold text-3xl">Hello, </Text>
          <Text className="font-nunito-semi-bold text-3xl text-primary-orange">Iblal!</Text>
        </View>
        <TodaysHabitsSummary />
        <TodaysHabits />
        <YourGoals />
      </View>
    </ScrollView>
  );
};

export default Home;
