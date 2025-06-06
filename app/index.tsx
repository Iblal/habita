import { Stack, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Home'}} />
      <Pressable className="bg-blue-500" onPress={() => router.push('/SignUp')}>
        <Text>Sign Up</Text>
      </Pressable>
    </>
  );
}
