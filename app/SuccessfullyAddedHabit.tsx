import { StyleSheet, Text, View } from 'react-native';
import FormSubmitBtn from '~/components/FormSubmitBtn';

const SuccessfullyAddedHabit = () => {
  return (
    <View className="flex-1 justify-center">
      <View className="flex-row justify-center">
        <Text className="font-nunito-bold text-4xl">Done!</Text>
      </View>
      <View className="mt-5 flex-row justify-center">
        <Text className="font-nunito-semi-bold">New habit goal has been added</Text>
      </View>
      <View className="flex-row justify-center">
        <Text className="font-nunito-semi-bold">Let's do our best to achieve your goal!</Text>
      </View>
      <View className='mt-5'>
        <FormSubmitBtn label="Ok" />
      </View>
    </View>
  );
};

export default SuccessfullyAddedHabit;

const styles = StyleSheet.create({});
