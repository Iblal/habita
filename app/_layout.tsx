import '../global.css';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'nunito-bold': require('../assets/fonts/nunito-bold.ttf'),
    'nunito-extra-bold': require('../assets/fonts/nunito-extra-bold.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView className={'flex-1'}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
