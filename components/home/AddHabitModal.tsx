import { Text, View, Modal, Alert, Pressable } from 'react-native';

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
        Alert.alert('Modal has been closed.');
        setModalVisible(false);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
          <Text>Hello from the modal!</Text>
          <Pressable
            onPress={closeModal}
            style={{ marginTop: 15, padding: 10, backgroundColor: '#2196F3', borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Close Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddHabitModal;