import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TodaysHabitsSummary = () => {
  return (
    <View className="mr-5 mt-5 flex-row items-center justify-evenly rounded-md bg-orange-400 p-10">
      <Text className="font-nunito-bold text-xl text-white">70%</Text>
      <View>
        <Text className="font-nunito-bold text-xl text-white">3 of 5 habits</Text>
        <Text className="font-nunito-medium text-xl text-white">completed today!</Text>
      </View>
    </View>
  );
};

export default TodaysHabitsSummary;

const styles = StyleSheet.create({});
