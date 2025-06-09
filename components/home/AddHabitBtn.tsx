import { Text, Pressable } from 'react-native';

const AddHabitBtn = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress} className="absolute bottom-5 right-5 rounded-full border-2 border-white bg-green-500 p-4">
      <Text className="text-lg font-bold text-white">Add</Text>
    </Pressable>
  );
};

export default AddHabitBtn;
