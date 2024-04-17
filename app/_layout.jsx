import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const rootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "FiraSans-Black": require("../assets/fonts/FiraSans-Black.ttf"),
    "FiraSans-Bold": require("../assets/fonts/FiraSans-Bold.ttf"),
    "FiraSans-ExtraBold": require("../assets/fonts/FiraSans-ExtraBold.ttf"),
    "FiraSans-ExtraLight": require("../assets/fonts/FiraSans-ExtraLight.ttf"),
    "FiraSans-Light": require("../assets/fonts/FiraSans-Light.ttf"),
    "FiraSans-Medium": require("../assets/fonts/FiraSans-Medium.ttf"),
    "FiraSans-Regular": require("../assets/fonts/FiraSans-Regular.ttf"),
    "FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf"),
    "FiraSans-Thin": require("../assets/fonts/FiraSans-Thin.ttf"),
  });
  
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false  }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false  }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false  }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false  }} /> */}
    </Stack>
  )
} 

export default rootLayout