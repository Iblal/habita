import { View, ScrollView } from 'react-native';
import { useState } from 'react';
import TodaysHabitsSummary from '~/components/home/TodaysHabitsSummary';
import TodaysHabits from '~/components/home/TodaysHabits';
import YourGoals from '~/components/home/YourGoals';
import GreetingHeader from '~/components/home/GreetingHeader';
import TodaysDateHeader from '~/components/home/TodaysDateHeader';
import AddHabitBtn from '~/components/home/AddHabitBtn';
import AddHabitModal from '~/components/home/AddHabitModal';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

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
      <AddHabitBtn onPress={openModal} />
      <AddHabitModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Home;