import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PoppinsBlack:require('../assets/fonts/Poppins-Black.ttf'),
    PoppinsBold:require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsExtraBold:require('../assets/fonts/Poppins-ExtraBold.ttf'),
    PoppinsLight:require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsExtraLight:require('../assets/fonts/Poppins-ExtraLight.ttf'),
    PoppinsMedium:require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular:require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold:require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsThin:require('../assets/fonts/Poppins-Thin.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>

  );
}
