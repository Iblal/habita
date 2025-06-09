import { Text, View, ScrollView } from 'react-native';
import TodaysHabitsSummary from '~/components/home/TodaysHabitsSummary';
import TodaysHabits from '~/components/home/TodaysHabits';
import YourGoals from '~/components/home/YourGoals';
import GreetingHeader from '~/components/home/GreetingHeader';
import TodaysDateHeader from '~/components/home/TodaysDateHeader';

const Home = () => {
  return (
    <ScrollView>
      <View className="ml-5">
        <TodaysDateHeader />
        <GreetingHeader />
        <TodaysHabitsSummary />
        <TodaysHabits />
        <YourGoals />
      </View>
    </ScrollView>
  );
};

export default Home;
