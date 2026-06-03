import { APP_FONTS_NAME } from "@/constants";
import "../global.css";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();


  const [loaded, error] = useFonts({
    [APP_FONTS_NAME.K2DREGULAR]: require('@assets/fonts/K2D-Regular.ttf'),
    [APP_FONTS_NAME.K2DSEMIBOLD]: require('@assets/fonts/K2D-SemiBold.ttf'),
    [APP_FONTS_NAME.K2DBOLD]: require('@assets/fonts/K2D-Bold.ttf'),
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
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="create-vc/index" />
    </Stack>);
}




