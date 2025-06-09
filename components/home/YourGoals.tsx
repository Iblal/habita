import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const YourGoals = () => {
  return (
        <View className="mr-5 mt-5 rounded bg-[white] p-5">
          <View className="flex-row justify-between">
            <Text className="font-nunito-bold text-xl">Your goals</Text>
            <Link href="/">
              <Text className="font-nunito-bold text-primary-orange">See all</Text>
            </Link>
          </View>
          <View className="mt-5 rounded bg-[#E7E7E7] p-5">
            <View className="flex-row justify-between ">
              <Text className="font-nunito-bold">Finish 5 philosophy books</Text>
              <Entypo name="dots-three-vertical" size={16} color="grey" />
            </View>
            <LinearGradient
              className="mt-2 items-center justify-center overflow-hidden rounded-md p-2"
              colors={['#fb923c', '#f97316']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}></LinearGradient>
            <Text className="mt-2 font-nunito-medium">5 from 7 days target</Text>
            <Text className="mt-2 font-nunito-semi-bold text-primary-orange">Everyday</Text>
          </View>
          <View className="mt-5 rounded bg-[#E7E7E7] p-5">
            <View className="flex-row justify-between ">
              <Text className="font-nunito-bold">Finish 5 philosophy books</Text>
              <Entypo name="dots-three-vertical" size={16} color="grey" />
            </View>
            <LinearGradient
              className="mt-2 items-center justify-center overflow-hidden rounded-md p-2"
              colors={['#fb923c', '#f97316']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}></LinearGradient>
            <Text className="mt-2 font-nunito-medium">5 from 7 days target</Text>
            <Text className="mt-2 font-nunito-semi-bold text-primary-orange">Everyday</Text>
          </View>
        </View>
  )
}

export default YourGoals

const styles = StyleSheet.create({})