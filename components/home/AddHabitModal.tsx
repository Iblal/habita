import { Text, View, Modal, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import InputField from '../InputField';
import FormSubmitBtn from '../FormSubmitBtn';

interface AddHabitModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const AddHabitModal = ({ modalVisible, setModalVisible }: AddHabitModalProps) => {
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
          <InputField label="Your goal" labelClassName="px-0" containerClassName="mb-5" />
          <InputField label="Habit name" labelClassName="px-0" containerClassName="mb-5" />
          <FormSubmitBtn label="Create new" containerClassName="w-full mx-1 mr-5" />
        </View>
      </View>
    </Modal>
  );
};

export default AddHabitModal;
