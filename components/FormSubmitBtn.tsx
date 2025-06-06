import { StyleSheet, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface FormSubmitBtnProps {
  onPress?: () => void;
  label: string;
}

const FormSubmitBtn = ({ label, onPress }: FormSubmitBtnProps) => {
  return (
    <Pressable onPress={onPress} className="mx-5 overflow-hidden rounded-lg">
      <LinearGradient
        className="items-center justify-center px-6 py-4"
        colors={['#fb923c', '#f97316']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text className="text-center text-lg font-bold text-white">{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default FormSubmitBtn;

const styles = StyleSheet.create({});
