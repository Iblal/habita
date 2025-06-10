import { Text, View, Modal, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router'
import InputField from '../InputField';
import FormSubmitBtn from '../FormSubmitBtn';

interface AddHabitModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const AddHabitModal = ({ modalVisible, setModalVisible }: AddHabitModalProps) => {
  const router = useRouter();


  function habitAddedSuccessfully() {
    router.push("/SuccessfullyAddedHabit")
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View className="flex-1 items-center justify-center bg-black/50 p-5">
        <View className="w-full rounded-lg bg-white p-5 shadow-lg">
          <View className="mb-2 flex-row justify-between">
            <Text className="font-nunito-bold">Create new habit goal</Text>
            <Pressable onPress={closeModal}>
              <AntDesign name="close" size={16} color="black" />
            </Pressable>
          </View>
          <View className="my-2 h-px w-11/12 bg-gray-300" />
          <InputField label="Your goal" labelClassName="px-2" containerClassName="mb-5" />
          <InputField label="Habit name" labelClassName="px-2" containerClassName="mb-5" />
          <View className="mb-5 flex-row items-center justify-between">
            <Text className="font-nunito-bold ">Period</Text>
            <Picker style={styles.picker} mode="dropdown">
              <Picker.Item label="1 month (30 days)" value="30 days" />
            </Picker>
          </View>
          <View className="mb-5 flex-row items-center justify-between">
            <Text className="font-nunito-bold ">Habit type</Text>
            <Picker style={styles.picker} mode="dropdown">
              <Picker.Item label="Everyday" value="Everyday" />
            </Picker>
          </View>
          <FormSubmitBtn onPress={habitAddedSuccessfully} label="Create new" containerClassName="mt-5" />
        </View>
      </View>
    </Modal>
  );
};

export default AddHabitModal;

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 200,
    backgroundColor: '#E7E7E7',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
});
