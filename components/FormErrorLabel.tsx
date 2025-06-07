import { StyleSheet, Text} from 'react-native';

const FormErrorLabel = ({label} : any) => {
  return <Text className="mb-2 ml-5 text-red-600">{label}</Text>;
};

export default FormErrorLabel;

const styles = StyleSheet.create({});
