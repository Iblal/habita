import { Text, View, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'; // Import ScrollView, KeyboardAvoidingView, Platform
import { useState } from 'react';
import InputField from '../../components/InputField';
import FormErrorLabel from '~/components/FormErrorLabel';
import FormSubmitBtn from '~/components/FormSubmitBtn';
import GoogleAuthBtn from '~/components/GoogleAuthBtn';
import SignUpHeader from '~/components/SignUpHeader';

const SignUp = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  const validateForm = () => {
    let isValid = true;

    setNameError('');
    setEmailError('');
    setPasswordError('');
    setPasswordConfirmationError('');

    if (!name.trim()) {
      setNameError('Name is required.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    }

    if (!passwordConfirmation.trim()) {
      setPasswordConfirmationError('Password confirmation is required.');
      isValid = false;
    } else if (password !== passwordConfirmation) {
      setPasswordConfirmationError('Passwords do not match.');
      isValid = false;
    }

    return isValid;
  };

  function handleRegistration() {
    if (validateForm()) {
      console.log('Sign Up Pressed');
      console.log('The values:', name, email, password, passwordConfirmation);
      Alert.alert('Success', 'Form submitted successfully!');
    } else {
      console.log('Validation failed');
      Alert.alert('Error', 'Please correct the errors in the form.');
    }
  }

  function handleNameChange(text: string) {
    setName(text);
    if (nameError && text.trim()) {
      setNameError('');
    }
  }

  function handleEmailChange(text: string) {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailError && text.trim() && emailRegex.test(text)) {
      setEmailError('');
    }
  }

  function handlePasswordChange(text: string) {
    setPassword(text);
    if (passwordError && text.trim()) {
      setPasswordError('');
    }
  }

  function handlePasswordConfirmationChange(text: string) {
    setPasswordConfirmation(text);
    if (passwordConfirmationError && text.trim() && password === text) {
      setPasswordConfirmationError('');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f6f6f6b1', paddingTop: 10 }}
        keyboardShouldPersistTaps="handled">
        <SignUpHeader />
        <FormErrorLabel label={nameError} />
        <InputField label="Name" value={name} onChangeText={handleNameChange} />
        <FormErrorLabel label={emailError} />
        <InputField label="Email" value={email} onChangeText={handleEmailChange} />
        <FormErrorLabel label={passwordError} />
        <InputField
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <FormErrorLabel label={passwordConfirmationError} />
        <InputField
          label="Password confirmation"
          value={passwordConfirmation}
          onChangeText={handlePasswordConfirmationChange}
          secureTextEntry={true}
        />
        <View className="mt-5">
          <FormSubmitBtn label="Sign Up" onPress={handleRegistration} />
        </View>
        <View className="my-8 items-center">
          <Text className="text-gray-500">Or sign up with:</Text>
        </View>
        <GoogleAuthBtn />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
