import { View, ScrollView, Pressable, Text } from 'react-native';
import TodaysHabitsSummary from '~/components/home/TodaysHabitsSummary';
import TodaysHabits from '~/components/home/TodaysHabits';
import YourGoals from '~/components/home/YourGoals';
import GreetingHeader from '~/components/home/GreetingHeader';
import TodaysDateHeader from '~/components/home/TodaysDateHeader';

const Home = () => {
  return (
    <View>
      <ScrollView>
        <View className="mb-5 ml-5">
          <TodaysDateHeader />
          <GreetingHeader />
          <TodaysHabitsSummary />
          <TodaysHabits />
          <YourGoals />
        </View>
      </ScrollView>
      <Pressable className="absolute bottom-5 right-5 rounded-full border-2 border-white bg-green-500 p-4">
        <Text className="text-lg font-bold text-white">Add</Text>
      </Pressable>
    </View>
  );
};

export default Home;
