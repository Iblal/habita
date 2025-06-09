import { StyleSheet, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface FormSubmitBtnProps {
  onPress?: () => void;
  label: string;
  containerClassName?: string;
}

const FormSubmitBtn = ({ label, onPress, containerClassName }: FormSubmitBtnProps) => {
  return (
    <Pressable onPress={onPress} className={`mx-5 overflow-hidden rounded-lg ${containerClassName || ''}`}>
      <LinearGradient
        className="items-center justify-center px-6 py-4 w-full"
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
