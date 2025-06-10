import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons';
import React from 'react'

const TodaysHabits = () => {
  return (
        <View className="mr-5 mt-5 rounded bg-white p-5">
          <View className="flex-row justify-between">
            <Text className="font-nunito-bold text-xl">Today's habits</Text>
            <Link href="/Habits">
              <Text className="font-nunito-bold text-primary-orange">See all</Text>
            </Link>
          </View>
          <View className="justify mt-5 flex-row items-center justify-between rounded bg-[#EDFFF4] p-5">
            <Text className="font-nunito-bold text-[#37C871]">Meditating</Text>
            <View className="flex-row items-center">
              <Checkbox></Checkbox>
              <Entypo name="dots-three-vertical" size={16} color="grey" />
            </View>
          </View>
          <View className="justify mt-5 flex-row items-center justify-between rounded bg-[#EDFFF4] p-5">
            <Text className="font-nunito-bold text-[#37C871]">Read philosophy</Text>
            <View className="flex-row items-center">
              <Checkbox></Checkbox>
              <Entypo name="dots-three-vertical" size={16} color="grey" />
            </View>
          </View>
          <View className="justify mt-5 flex-row items-center justify-between rounded bg-[#d9d9d969] p-5">
            <Text className="font-nunito-bold">Read philosophy</Text>
            <View className="flex-row items-center">
              <Checkbox></Checkbox>
              <Entypo name="dots-three-vertical" size={16} color="grey" />
            </View>
          </View>
        </View>
  )
}

export default TodaysHabits

const styles = StyleSheet.create({})