import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const rootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SF-Pro-Display-Black": require("../assets/fonts/SF-Pro-Display-Black.otf"),
    "SF-Pro-Display-Bold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-UltraLight": require("../assets/fonts/SF-Pro-Display-Ultralight.otf"),
    "SF-Pro-Display-Light": require("../assets/fonts/SF-Pro-Display-Light.otf"),
    "SF-Pro-Display-Medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Display-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Display-Semibold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Pro-Display-Thin": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
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